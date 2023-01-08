import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../utils/api'
import { NoAuthorization } from './NoAuthorization'
import { NoUser } from './NoUser'

export const Sellers = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const [sellers, setSellers] = useState([])
  useEffect(() => {
    const allSellers = async () => {
      try {
        const sellers = await Api.getSellers()
        setSellers(sellers)
      } catch (error) {
        console.log(error)
      }
    }
    allSellers()
  }, [])

  if (user) {
    if (typeUser === 'admin') {
      return (
        <div>
          <h1>Vendedores</h1>
          {sellers.map(({ _id, name }) => {
            return <div key={_id} >
              <h1>Vendedor(a){name}</h1>
              <button><Link to={`/vendedor/${_id}`}>Mais detalhes</Link></button>
            </div>
          })}
        </div>
      )
    } else {
      return <NoAuthorization />
    }
  } else {
    return <NoUser />
  }
}
