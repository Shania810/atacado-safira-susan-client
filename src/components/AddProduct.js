import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api'

export const AddProduct = () => {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')
  const [commission, setCommission] = useState('')
  const [price, setPrice] = useState('')
  const [wholesalePrice, setWholesalePrice] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()
  const newProduct = async (e) => {
    e.preventDefault()
    const product = {
      name,
      category,
      stock: Number(stock),
      commission_amount: Number(commission),
      price: Number(price),
      wholesale_price: Number(wholesalePrice),
      retail_price: Number(retailPrice),
      description
    }
    try {
      await Api.postProduct(product)
      navigate('/estoque')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const allCategories = async () => {
      try {
        const categories = await Api.getCategories()
        setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }
    allCategories()
  }, [])
  return (
    <form onSubmit={newProduct} >
      <h1>Novo produto</h1>
      <div>
        <label>Nome do produto</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Categoria</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Nenhum</option>
          {categories.map((category) => <option key={category._id} >{category.name}</option>)}
        </select>
      </div>
      <div>
        <label>Estoque</label>
        <input type='text' value={stock} onChange={(e) => setStock(e.target.value)} />
      </div>
      <div>
        <label>Valor da comissão</label>
        <input type='text' value={commission} onChange={(e) => setCommission(e.target.value)} />
      </div>
      <div>
        <label>Preço pago</label>
        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Preço de atacado</label>
        <input type='text' value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} />
      </div>
      <div>
        <label>Preço de varejo</label>
        <input type='text' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} />
      </div>
      <div>
        <label>Descrição</label>
        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type='submit'>Adicionar produto</button>
    </form>
  )
}
