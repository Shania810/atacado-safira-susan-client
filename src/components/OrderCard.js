import React from 'react'
import { Link } from 'react-router-dom'

export const OrderCard = ({ order, number,items }) => {
  const { _id, total, seller } = order
  return (
    <div>
      <Link to={`/pedido/${_id}`}>
        <div>Pedido {items.length - number}</div>
        <div>Vendedor {seller}</div>
        <div>Total {total}</div>
      </Link>
    </div>
  )
}
