import React from 'react'
import { Div } from '../design/styled.components'
import { Product } from './Product'

export const Products = ({ products }) => {
  return (
    <Div wrap='wrap' margin='0px 0px 50px 0px' >
      {products.map((product) => <Product key={product._id} product={product} />)}
    </Div>
  )
}
