import React, { useEffect, useState } from 'react'
import {Search} from './Search'
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
  const searchProduct = async(e,search)=>{
    setSearch(e.target.value)
    try {
      const searchedProducts = await Api.getProductSearched(search === '' ? false : search)
      setProducts(searchedProducts)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
     <Search search={search} searchProduct={searchProduct}/>
      {products?.map((product)=>{
        return <div key={product._id} >
          <div>{product.name}</div>
          <div>{product.stock}</div>
          <div>{product.category.name}</div>
        </div>
      })}
    </div>
  )
}
