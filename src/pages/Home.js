import React from 'react'
import { ButtonBlue, ButtonGreen, Buttons, Container, Title, ButtonLink } from '../design/styled.components'

export const Home = () => {
  return (
    <Container>
      <Title>
        <h1>Atacado Safira Susan</h1>
      </Title>
      <Buttons>
        <div>
          <ButtonBlue><ButtonLink to='/criarConta'>Criar Conta</ButtonLink></ButtonBlue>
        </div>
        <div>
          <ButtonGreen><ButtonLink to='/acessarConta'>Acessar Conta</ButtonLink></ButtonGreen>
        </div>
      </Buttons>
    </Container>
  )
}
