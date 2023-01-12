import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
      <Link to='/criarConta'>Criar conta</Link>
      <Link to='/acessarConta'>Acessar conta</Link>
      <Link to='/estoque'>Estoque</Link>
      <Link to='/pedidos'>Pedidos</Link>
      <Link to='/vendedores'>Vendedores</Link>
      <Link to='/clientes'>Clientes</Link>
      <Link to='/lucros'>Lucros</Link>
    </nav>
  )
}
