import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api'

export const LogIn = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const verifyUser = async (e) => {
    e.preventDefault()
    const user = {
      name,
      password
    }
    try {
      await Api.logIn(user)
      navigate('/pedidos')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e) => verifyUser(e)} >
      <div>
        <label>Nome de usuário</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Senha do usuário</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit'>Fazer Login</button>
    </form>
  )
}
