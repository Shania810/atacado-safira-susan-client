import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Nav, NavLink,IconMenu } from '../design/styled.components'
export const NavBar = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const [value, setValue] = useState(false)
  return (
    <div>
      <IconMenu onClick={() => setValue(!value)}><GiHamburgerMenu /></IconMenu>
      {value && <Nav>
        {!user && <NavLink to='/criarConta'>Criar conta</NavLink>}
        {!user && <NavLink to='/acessarConta'>Acessar conta</NavLink>}
        {user && <NavLink to='/estoque'>Estoque</NavLink>}
        {user && <NavLink to='/pedidos'>Pedidos</NavLink>}
        {typeUser === 'admin' && <NavLink to='/vendedores'>Vendedores</NavLink>}
        {user && <NavLink to='/clientes'>Clientes</NavLink>}
        {typeUser === 'admin' && <NavLink to='/lucros'>Lucros</NavLink>}
      </Nav>}
    </div>
  )
}
