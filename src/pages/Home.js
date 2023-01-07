import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>Atacado Safira Susan</h1>
        <button><Link to='/estoque'>Estoque</Link></button>
        <button><Link to='/pedidos'>Pedidos</Link></button>
        <button><Link to='/vendedores'>Vendedores</Link></button>
    </div>
  )
}
