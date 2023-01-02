import React from 'react'
import {CardProduct} from '../design/styled.components'
export const Product = ({product}) => {
    const {name,category,stock} = product
  return (
    <CardProduct>
        <div>Nome: {name[0].toUpperCase() + name.slice(1,name.length)}</div>
        <div>Categoria: {category.name[0].toUpperCase() + category.name.slice(1,category.name.length)}</div>
        <div>Estoque: {stock}</div>
    </CardProduct>
  )
}
