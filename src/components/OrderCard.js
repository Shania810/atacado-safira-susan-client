import React from 'react'
import { Link } from 'react-router-dom'

export const OrderCard = ({ order, number }) => {
  const { _id, total, seller } = order
  return (
    <div>
      <Link to={`/pedido/${_id}`}>
        <div>Pedido {number + 1}</div>
        <div>Vendedor {seller}</div>
        <div>Total {total}</div>
      </Link>
    </div>
  )
}
