import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../utils/api'

export const Product = () => {
  const {id} = useParams()
  const [product,setProduct] = useState({})
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [retailPrice,setRetailPrice] = useState('')
  const [wholesalePrice,setWholesalePrice] = useState('')
  const [stock,setStock] = useState('')
  const [description,setDescription] = useState('')
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
  const updateProduct = async(e,product) =>{
    e.preventDefault()
    const newProduct = {
      name: name !== '' && name,
      category: category !== '' && category,
      retail_price: retailPrice !== '' && retailPrice,
      wholesale_price: wholesalePrice !== '' && wholesalePrice,
      stock: stock !== '' && stock,
      description: description !== '' && description
    }
    try {
      await Api.putProduct(product._id,newProduct)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
       <div>Nome do produto: {product?.name}</div>
       <input type='text' value={name}  onChange={(e)=> setName(e.target.value)} />
       <div>Categoria: {product?.category?.name}</div>
       <input type='text' value={category} onChange={(e)=> setCategory(e.target.value)} />
       <div>Preço do atacado: {product?.retail_price}</div>
       <input type='text' value={retailPrice} onChange={(e)=> setRetailPrice(e.target.value)} />
       <div>Preço do varejo: {product?.wholesale_price}</div>
       <input type='text' value={wholesalePrice} onChange={(e)=> setWholesalePrice(e.target.value)} />
       <div>Estoque: {product?.stock}</div>
       <input type='text' value={stock} onChange={(e)=> setStock(e.target.value)} />
       <div>Descrição: {product?.description}</div>
       <input type='text' value={description} onChange={(e)=> setDescription(e.target.value)} />
       <button type='submit' onClick={()=>updateProduct(product)}>Salvar Alterações</button>
    </div>
  )
}
