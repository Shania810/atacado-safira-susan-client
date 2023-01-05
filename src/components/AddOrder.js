import React, { useEffect, useState } from 'react'
import {Search} from './Search'
import Api from '../utils/api'
import { Order } from './Order'
export const AddOrder = () => {
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState('')
  const [orderItems,setOrderItems] = useState([])
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
  const addOrderItem = (product) =>{
   const validate = orderItems.filter((orderItem)=> orderItem.name === product.name )
   if(validate.length >= 2){
    console.log('já existe')
    }else{
      setOrderItems([...orderItems,product])
    }
  }
  return (
    <div>
     <Search search={search} searchProduct={searchProduct}/>
      {products?.map((product)=>{
        return <div key={product._id} onClick={()=>addOrderItem(product)}>
          <div>{product.name}</div>
          <div>{product.stock}</div>
          <div>{product.category.name}</div>
        </div>
      })}
      <table>
      <thead>
        <td>
          <tr>Item</tr>
          <tr>Produto</tr>
          <tr>Quantidade</tr>
          <tr>Preço</tr>
        </td>
      </thead>
      <tbody>
      {orderItems.map((orderItem)=> <Order orderItem={orderItem} /> )}
      </tbody>
      </table>
    </div>
  )
}
