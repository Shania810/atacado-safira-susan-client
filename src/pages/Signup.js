import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api'
import { ButtonBlue,Container, Title,LabelInput, Form, Label, Input } from '../design/styled.components'

export const Signup = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
  
    const navigate = useNavigate()
  
    const newUser = async (e) => {
      e.preventDefault()
      const user = {
        name,
        password
      }
      try {
        await Api.signUp(user)
        navigate('/estoque')
      } catch (error) {
        console.log(error)
      }
    }
    return (
     <Container>  
      <Form onSubmit={(e) => newUser(e)} >
        <Title color='#3c6c94'><h1>Criar Conta</h1></Title>
        <LabelInput>
          <Label>Nome do Usuário</Label>
          <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </LabelInput>
        <LabelInput>
          <Label>Senha do Usuário</Label>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </LabelInput>
        <div>
        <ButtonBlue type='submit'>Criar Usuário</ButtonBlue>
        </div>
      </Form>
      </Container>
    )
}
