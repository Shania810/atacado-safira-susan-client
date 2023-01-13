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
        {!user && <NavLink onClick={() => setValue(false)}  to='/criarConta'>Criar conta</NavLink>}
        {!user && <NavLink onClick={() => setValue(false)}  to='/acessarConta'>Acessar conta</NavLink>}
        {user && <NavLink onClick={() => setValue(false)} to='/estoque'>Estoque</NavLink>}
        {user && <NavLink onClick={() => setValue(false)} to='/pedidos'>Pedidos</NavLink>}
        {typeUser === 'admin' && <NavLink onClick={() => setValue(false)} to='/vendedores'>Vendedores</NavLink>}
        {user && <NavLink onClick={() => setValue(false)} to='/clientes'>Clientes</NavLink>}
        {typeUser === 'admin' && <NavLink onClick={() => setValue(false)} to='/lucros'>Lucros</NavLink>}
      </Nav>}
    </div>
  )
}
