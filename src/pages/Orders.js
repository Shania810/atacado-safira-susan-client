import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import {OrderCard} from '../components/OrderCard'
import { Link } from 'react-router-dom'
export const Orders = () => {
  const [orders,setOrders] = useState([])
  const allOrders = async() =>{
    try {
      const orders = await Api.getOrders()
      setOrders(orders)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
   allOrders()
  },[])
  return (
    <div>
      <h1>Pedidos</h1>
      {orders.map((order,index)=> <OrderCard order={order} number={index}/>)}
      <button><Link to='/novoPedido'>Nova venda</Link></button>
    </div>
  )
}
