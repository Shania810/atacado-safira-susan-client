import React, { useEffect, useState } from 'react'
import Api from '../utils/api'

export const AddProduct = () => {
  const[categories,setCategories] = useState([]) 
  const[name,setName] = useState('')
  const[category,setCategory] = useState('')
  const[stock,setStock] = useState('')
  const[wholesalePrice,setWholesalePrice] = useState('')
  const[retailPrice,setRetailPrice] = useState('')
  const[description,setDescription] = useState('')

  const newProduct = async(e) =>{
    e.preventDefault()
    const product = {
        name,
        category,
        stock,
        wholesal_price: wholesalePrice,
        retail_price: retailPrice,
        description
    }
    try {
      console.log(product)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    const allCategories = async() =>{
        try {
            const categories = await Api.getCategories()
            setCategories(categories)
        } catch (error) {
            console.log(error)
        }
      }
      allCategories()
  },[])
  return (
    <form onSubmit={newProduct} >
      <h1>Novo produto</h1>
        <div>
            <label>Nome do produto</label>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <div>
            <label>Categoria</label>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
              {categories.map((category)=> <option value={category.name}>{category.name}</option>)}
            </select>
        </div>
        <div>
            <label>Estoque</label>
            <input type='text' value={stock} onChange={(e)=> setStock(e.target.value)} />
        </div>
        <div>
            <label>Preço de atacado</label>
            <input type='text' value={wholesalePrice} onChange={(e)=> setWholesalePrice(e.target.value)} />
        </div>
        <div>
            <label>Preço de varejo</label>
            <input type='text' value={retailPrice} onChange={(e)=> setRetailPrice(e.target.value)} />
        </div>
        <div>
            <label>Descrição</label>
            <input type='text' value={description} onChange={(e)=> setDescription(e.target.value)} />
        </div>
        <button type='submit'>Adicionar produto</button>
    </form>
  )
}
