import React from 'react'
import { Link } from 'react-router-dom'
import {Container} from '../design/styled.components'

export const OrderCard = ({ order, number,items }) => {
  const { _id, total, seller } = order
  return (
    <Container>
      <Link to={`/pedido/${_id}`}>
        <div>Pedido {items.length - number}</div>
        <div>Vendedor {seller.name}</div>
        <div>Total {total}</div>
      </Link>
    </Container>
  )
}
