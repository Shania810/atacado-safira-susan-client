import React from 'react'

export const OrderCard = ({order,number}) => {
  const {total,seller} = order
  return (
    <div>
      <div>Pedido {number + 1}</div>
      <div>Vendedor {seller}</div>
      <div>Total {total}</div>
    </div>
  )
}
