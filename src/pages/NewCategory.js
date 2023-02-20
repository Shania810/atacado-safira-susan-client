import React from 'react'
import { useState } from 'react'
import { Button, Container, Form, Input, Label, LabelInput } from '../design/styled.components'

export const NewCategory = () => {
  const [category, setCategory] = useState('')
  return (
    <Container alignItems='center'>
        <Form>
           <LabelInput>
            <Label>Nova Categoria</Label>
            <Input type='text' value={category} onChange={(e)=> setCategory(e.target.value)} />
           </LabelInput>
           <Button>Adicionar Categoria</Button>
        </Form>
    </Container>
  )
}
