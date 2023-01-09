import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../utils/api'
import { NoUser } from './NoUser'

export const Product = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const { id } = useParams()
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState({})
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [wholesalePrice, setWholesalePrice] = useState('')
  const [stock, setStock] = useState('')
  const [commission,setCommission] = useState('')
  const [description, setDescription] = useState('')

  const [showEdit, setShowEdit] = useState(false)

  const navigate = useNavigate()

  const getProduct = async (idProduct) => {
    try {
      const product = await Api.getProduct(idProduct)
      setProduct(product)
      setName(product.name)
      setStock(product.stock)
      setCategory(product.category.name)
      setPrice(product.price)
      setRetailPrice(product.retail_price)
      setWholesalePrice(product.wholesale_price)
      setCommission(product.commission_amount)
      setDescription(product.description)
    } catch (error) {
      console.log(error)
    }
  }
 useEffect(() => {
    getProduct(id)
  }, [id])
  const updateProduct = async (product) => {
    const newProduct = {
      name,
      category,
      price: Number(price),
      retail_price: Number(retailPrice),
      wholesale_price: Number(wholesalePrice),
      stock: Number(stock),
      commission_amount: Number(commission),
      description
    }
    try {
      await Api.putProduct(product._id, newProduct)
      await getProduct(id)
      setShowEdit(false)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteProduct = async(idProduct)=>{
    try {
      await Api.deleteProduct(idProduct)
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

  if(user){
  return (
    <div>

      <div>
        {showEdit ? <div><b>Nome do produto:</b><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></div> : <div><b>Nome do produto: {product?.name}</b>
        </div>}
      </div>

      <div>
        {showEdit ? <div><b>Categoria:</b><select type='text' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Nenhum</option>
          {categories.map((category) => <option key={category._id} >{category?.name}</option>)}</select></div> :
          <div><b>Categoria: {product?.category?.name}</b></div>}
      </div>
        
      <div>
        {typeUser === 'admin' && showEdit ? <div><b>Preço pago</b><input type='text' value={price} onChange={(e) => setPrice(e.target.value)} /> </div> : <div><b>Preço pago: {product?.price}</b></div>}
      </div>

      <div>
        {showEdit ? <div><b>Preço de atacado</b><input type='text' value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} /> </div> : <div><b>Preço de atacado: {product?.wholesale_price}</b></div>}
      </div>

      <div>
        {showEdit ? <div><b>Preço de varejo:</b><input type='text' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} /></div> : <div><b>Preço de varejo: {product?.retail_price}</b></div>}
      </div>

      <div>
        {showEdit ? <div><b>Estoque:</b><input type='text' value={stock} onChange={(e) => setStock(e.target.value)} /></div> : <div><b>Estoque: {product?.stock}</b></div>}
      </div>

      <div>
        {showEdit ? <div><b>Valor da comissão</b><input type='text' value={commission} onChange={(e) => setCommission(e.target.value)} /> </div> : <div><b>Valor da comissão: {product?.commission_amount}</b></div>}
      </div>

      <div>
        {typeUser === 'admin' && showEdit ? <div><b>Descrição:</b><input type='text' value={description} onChange={(e) => setDescription(e.target.value)} /></div> : <div><b>Descrição: {product?.description}</b></div>}
      </div>

      {typeUser === 'admin' && showEdit ? <button type='submit' onClick={() => updateProduct(product)}>Salvar Alterações</button> : <button type='submit' onClick={() => setShowEdit(true)}>Atualizar produto</button>  }
      {typeUser === 'admin' && <button onClick={()=> deleteProduct(product._id)} >Excluir Produto</button>}
    </div>
  )
  }else{
    return <NoUser/>
  }
}
