import React from 'react'
import { Product } from './Product'

export const Products = ({products}) => {
  return (
    products.map((product)=> <Product product={product} /> )
  )
}
