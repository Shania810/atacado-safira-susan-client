import React from 'react'

export const Product = ({product}) => {
    const {name} = product
  return (
    <div>{name[0].toUpperCase() + name.slice(1,name.length)}</div>
  )
}
