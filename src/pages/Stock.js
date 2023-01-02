import React, { useEffect, useState } from 'react'
import { Products } from '../components/Products'
import Api from '../utils/api'
export const Stock = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const allProducts = async() =>{
            try {
              const products =  await Api.getProducts()
              setProducts(products)
            } catch (error) {
              console.log(error)
            }
          }
          allProducts()
    },[])
  return (
    <div>
        <h1>Stock</h1>
        <div>
            <Products products={products} />
        </div>
    </div>
  )
}
