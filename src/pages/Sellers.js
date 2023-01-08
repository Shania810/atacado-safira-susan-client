import React, { useEffect, useState } from 'react'
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
  return (
    <div>
      <h1>Vendedores</h1>
      {sellers.map(({name})=>{
        return <div>
          <h1>Vendedor(a){name}</h1>
          <button>Mais detalhes</button>
        </div>
      })}
    </div>
  )
}
