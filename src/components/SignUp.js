import React, { useState } from 'react'
import Api from '../utils/api'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const newUser = async (e) => {
    e.preventDefault()
    const user = {
      name,
      password
    }
    try {
      await Api.signUp(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e) => newUser(e)} >
      <h1>Criar Conta</h1>
      <div>
        <label>Nome do Usuário</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Senha do Usuário</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit'>Criar Usuário</button>
    </form>
  )
}
