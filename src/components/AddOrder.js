import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
export const AddOrder = () => {
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState('')
  const allProducts = async() =>{
    try {
      const products = await Api.getProducts()
      setProducts(products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    allProducts()
  },[])
  const searchProduct = async(search)=>{
    try {
      const searchedProducts = await Api.getProductSearched(search)
      setProducts(searchedProducts)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {products?.map((product)=>{
        return <div>
          <div>{product.name}</div>
          <div>{product.stock}</div>
          <div>{product.category.name}</div>
        </div>
      })}
    </div>
  )
}
