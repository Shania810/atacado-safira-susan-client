import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import {Order} from '../components/Order'
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
      {orders.map((order)=> <Order/>)}
    </div>
  )
}
