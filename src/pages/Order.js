import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../utils/api'
export const Order = () => {
  const {id} = useParams() 
  const [order,setOrder] = useState({})
  const getOrder = async(id) =>{
    try {
        const order = await Api.getOrder(id)
        setOrder(order)
        
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    getOrder(id)
  },[id])
  return (
    <div>
       <div>Vendedor(a): {order?.seller}</div>
       <table>
       <thead>
       <tr>
            <td></td>
            <td>Item</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Total</td>
        </tr>
       </thead>
       <tbody>
        {order?.order_items?.map((item,index)=>{
          return <tr key={item._id} >
            <td>{index + 1}</td>
            <td>{item.product.name}</td>
            <td>{item.quantity <= 6 ? item.product.retail_price : item.product.wholesale_price }</td>
            <td>{item.quantity}</td>
            <td>{item.total}</td>
          </tr>
        })}
        <tr>
          <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{order?.total}</td>
        </tr>
        </tbody>
       </table>
    </div>
  )
}
