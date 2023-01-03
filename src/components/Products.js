import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from './Product'

export const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => <Product key={product._id} product={product} />)}
      <button><Link to='/novoProduto'>Adicionar Produto</Link></button>
    </div>
  )
}
