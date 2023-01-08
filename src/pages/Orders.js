import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { OrderCard } from '../components/OrderCard'
import { Link } from 'react-router-dom'
import { NoUser } from './NoUser'
export const Orders = () => {
  const user = localStorage.getItem('token')
  const [orders, setOrders] = useState([])
  const allOrders = async () => {
    try {
      const orders = await Api.getOrders()
      setOrders(orders)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    allOrders()
  }, [])
  if (user) {
    return (
      <div>
        <h1>Pedidos</h1>
        {orders.map((order, index, items) => <OrderCard key={order._id} order={order} number={index} items={items} />)}
        <button><Link to='/novoPedido'>Nova venda</Link></button>
      </div>
    )
  } else {
    return <NoUser />
  }
}
