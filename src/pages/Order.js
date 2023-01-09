import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PrintComponent } from '../components/PrintComponent'
import { NoUser } from './NoUser'
import Api from '../utils/api'
export const Order = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const { id } = useParams()
  const [orderId,setOrderId] = useState('')
  const [seller,setSeller] = useState('')
  const[client,setClient] = useState('')
  const [payment,setPayment] = useState('')
  const [total,setTotal] = useState('')
  const [orderItems,setOrderItems] = useState([])
  const navigate = useNavigate()
  const getOrder = async (id) => {
    try {
      const order = await Api.getOrder(id)
      setOrderId(order._id)
      setOrderItems(order.order_items)
      setSeller(order.seller.name)
      setClient(order.client.name)
      setPayment(order.payment)
      setTotal(order.total)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOrder(id)
  }, [id])

  const deleteOrder = async (id) => {
    try {
      await Api.deleteOrder(id)
      navigate('/pedidos')
    } catch (error) {
      console.log(error)
    }
  }
  if (user) {
    return (
      <div>
        <div>Vendedor(a): {seller}</div>
        <div>Cliente: {client}</div>
        <div>Pagamento: {payment}</div>
        <table>
          <thead>
            <tr>
              <td>Item</td>
              <td>Produto</td>
              <td>Preço</td>
              <td>Quantidade</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, index) => {
              return <tr key={item._id} >
                <td>{index + 1}</td>
                <td>{item.product.name}</td>
                <td>{item.quantity < 6 ? item.product.retail_price : item.product.wholesale_price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
              </tr>
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>   
        <PrintComponent order={{seller,client,payment,orderItems,total}} />
        {typeUser === 'admin' && <button onClick={() => deleteOrder(orderId)} >Excluir Pedido</button>}
      </div>
    )
  } else {
    return <NoUser />
  }
}
