import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../utils/api'

export const Seller = () => {
  const {id} = useParams()
  const [seller,setSeller] = useState({})

  useEffect(()=>{
    const getSeller = async(idSeller) =>{
      try {
        const seller = await Api.getSeller(idSeller)
        setSeller(seller)
      } catch (error) {
        console.log(error)
      }
    }
    getSeller(id)
  },[id])

  return (
    <div>
      <h1>Vendedor(a){seller.name}</h1>
      {seller?.orders?.map((order)=>{
        return <div key={order._id} >
          <h2>{order.seller.name}</h2>
        </div>
      })}
    </div>
  )
}
