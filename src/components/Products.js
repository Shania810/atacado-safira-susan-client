import React from 'react'
import { Product } from './Product'

export const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => <Product key={product._id} product={product} />)}
    </div>
  )
}
