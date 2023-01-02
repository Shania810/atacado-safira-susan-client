import React from 'react'

export const Product = ({product}) => {
    const {name} = product
  return (
    <div>{name}</div>
  )
}
