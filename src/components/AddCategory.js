import React, { useState } from 'react'
import Api from '../utils/api'
import { Button, Container, Form, Input, Label, LabelInput } from '../design/styled.components'
import { useNavigate } from 'react-router-dom'

export const AddCategory = () => {
  const [category,setCategory] = useState('')
  const navigate = useNavigate('')
  const newCategory = async (e) =>{
    e.preventDefault()
    try {
      await Api.postCategory({name: category})
      navigate('/estoque')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container alignItems='center'>
        <Form onSubmit={(e)=>newCategory(e)} >
           <LabelInput>
            <Label>Nova Categoria</Label>
            <Input type='text' value={category} onChange={(e)=> setCategory(e.target.value)} />
           </LabelInput>
           <Button>Adicionar Categoria</Button>
        </Form>
    </Container>
  )
}
