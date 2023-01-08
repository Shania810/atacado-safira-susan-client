import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../utils/api'

export const Sellers = () => {
  const [sellers,setSellers] = useState([])
  useEffect(()=>{
    const allSellers = async()=>{
      try {
        const sellers = await Api.getSellers()
        setSellers(sellers)
      } catch (error) {
        console.log(error)
      }
    }
    allSellers()
  },[])
  console.log(sellers)
  return (
    <div>
      <h1>Vendedores</h1>
      {sellers.map(({_id,name})=>{
        return <div key={_id} >
          <h1>Vendedor(a){name}</h1>
          <button><Link to={`/vendedor/${_id}`}>Mais detalhes</Link></button>
        </div>
      })}
    </div>
  )
}
