import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../utils/api'

export const Product = () => {
  const { id } = useParams()
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState({})
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [wholesalePrice, setWholesalePrice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')

  const [showInputName, setShowInputName] = useState(false)
  const [showInputCategory, setShowInputCategory] = useState(false)
  const [showInputRetailPrice, setShowInputRetailPrice] = useState(false)
  const [showInputWholesalePrice, setShowInputWholesalePrice] = useState(false)
  const [showInputStock, setShowInputStock] = useState(false)
  const [showInputDescription, setShowInputDescription] = useState(false)

  const getProduct = async (idProduct) => {
    try {
      const product = await Api.getProduct(idProduct)
      setProduct(product)
    } catch (error) {
      console.log(error)
    }
  }
  getProduct(id)
  useEffect(() => {
    getProduct(id)
  }, [id])
  const updateProduct = async (product) => {
    const newProduct = {
      name: name !== '' && name,
      category: category !== '' && category,
      retail_price: retailPrice !== '' && Number(retailPrice),
      wholesale_price: wholesalePrice !== '' && Number(wholesalePrice),
      stock: stock !== '' && Number(stock),
      description: description !== '' && description
    }
    try {
      await Api.putProduct(product._id, newProduct)
      await getProduct(id)
      setShowInputName(false)
      setShowInputCategory(false)
      setShowInputRetailPrice(false)
      setShowInputWholesalePrice(false)
      setShowInputStock(false)
      setShowInputDescription(false)
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
    <div>

      <div>
        {showInputName ? <div><b>Nome do produto:</b><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></div> : <div onClick={() => {
          setShowInputName(true)
          setName(product?.name)
        }}><b>Nome do produto: {product?.name}</b>
        </div>}
      </div>

      <div>
        {showInputCategory ? <div><b>Categoria:</b><select type='text' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>{''}</option>
          {categories.map((category) => <option>{category?.name}</option>)}</select></div> :
          <div onClick={() => setShowInputCategory(true)} ><b>Categoria: {product?.category?.name}</b></div>}
      </div>

      <div>
        {showInputRetailPrice ? <div><b>Preço de atacado:</b><input type='text' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} /></div> : <div onClick={() => {
          setShowInputRetailPrice(true)
          setRetailPrice(product?.retail_price)
        }} ><b>Preço de atacado: {product?.retail_price}</b></div>}
      </div>

      <div>
        {showInputWholesalePrice ? <div><b>Preço de varejo</b><input type='text' value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} /> </div> : <div onClick={() => {
          setShowInputWholesalePrice(true)
          setWholesalePrice(product?.wholesale_price)
        }}><b>Preço de varejo: {product?.wholesale_price}</b></div>}
      </div>

      <div>
        {showInputStock ? <div><b>Estoque:</b><input type='text' value={stock} onChange={(e) => setStock(e.target.value)} /></div> : <div onClick={() => {
          setShowInputStock(true)
          setStock(product?.stock)
        }} ><b>Estoque: {product?.stock}</b></div>}
      </div>

      <div>
        {showInputDescription ? <div><b>Descrição:</b><input type='text' value={description} onChange={(e) => setDescription(e.target.value)} /></div> : <div onClick={() => {
          setShowInputDescription(true)
          setDescription(product?.description)
        }} ><b>Descrição: {product?.description}</b></div>}
      </div>

      {(showInputName || showInputCategory || showInputRetailPrice || showInputWholesalePrice || showInputStock || showInputDescription) && <button type='submit' onClick={() => updateProduct(product)}>Salvar Alterações</button>}
    </div>
  )
}
