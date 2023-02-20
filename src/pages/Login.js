import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api'
import { Container, Title,LabelInput, Form, Label, Input, ButtonGreen} from '../design/styled.components'

export const Login = () => {
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
      navigate('/estoque')
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <Container alignItems='center'>
    <Form onSubmit={(e) => verifyUser(e)} >
      <Title color='#0a7568'><h1>Logar conta</h1></Title>
      <LabelInput>
        <Label>Nome de usuário</Label>
        <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </LabelInput>
      <LabelInput>
        <Label>Senha do usuário</Label>
        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </LabelInput>
      <ButtonGreen type='submit'>Fazer Login</ButtonGreen>
    </Form>
    </Container> 
  )
}
