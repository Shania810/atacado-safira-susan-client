import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import {NoUser} from './NoUser'
import Api from '../utils/api'

export const Stock = () => {
  const [products, setProducts] = useState([])
  const typeUser = localStorage.getItem('role')
  const user = localStorage.getItem('token')
  useEffect(() => {
    const allProducts = async () => {
      try {
        const products = await Api.getProducts()
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    allProducts()
  }, [])
  const productsFiltered = async (category) => {
    try {
      const productsFiltered = await Api.getProductsFiltered(category)
      setProducts(productsFiltered)
    } catch (error) {
      console.log(error)
    }
  }
  if(user){
  return (
    <div>
      <h1>Estoque</h1>
      <div>
        <Categories productsFiltered={productsFiltered} user={user} />
        <Products products={products} />
        {typeUser === 'admin' && <button><Link to='/novoProduto'>Adicione Produto</Link></button>}
      </div>
    </div>
  )
  }else{
    return <NoUser/>
  }
}
