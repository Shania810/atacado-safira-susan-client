import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../utils/api'

export const Product = () => {
  const {id} = useParams()
  const [product,setProduct] = useState({})
  useEffect(()=>{
    const getProduct = async(idProduct) =>{
      try {
        const product = await Api.getProduct(idProduct)
        setProduct(product)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct(id)
  },[id])
  return (
    <div>
       <div>Nome do produto: {product?.name}</div>
       <div>Categoria: {product?.category?.name}</div>
       <div>Preço do atacado: {product?.retail_price}</div>
       <div>Preço do varejo: {product?.wholesale_price}</div>
       <div>Estoque: {product?.stock}</div>
       <div>Descrição: {product?.description}</div>
    </div>
  )
}
