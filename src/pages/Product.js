import React, { useRef, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../utils/api'
import { ImImage } from 'react-icons/im'
import { NoUser } from './NoUser'
import {Button, Buttons, Container, Div, ImageCard} from '../design/styled.components'

export const Product = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const { id } = useParams()
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState({})
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [file, setFile] = useState('')
  const inputFileRef = useRef()
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [wholesalePrice, setWholesalePrice] = useState('')
  const [stock, setStock] = useState('')
  const [commission, setCommission] = useState('')
  const [description, setDescription] = useState('')

  const [showEdit, setShowEdit] = useState(false)

  const navigate = useNavigate()

  const getProduct = async (idProduct) => {
    try {
      const product = await Api.getProduct(idProduct)
      setProduct(product)
      setImage(product.imageURL)
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
      await Api.uploadImageProduct(product._id, file)
      await getProduct(id)
      setShowEdit(false)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteProduct = async (idProduct) => {
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

  const clickInputFile = () => {
    inputFileRef.current.click()
  }
  const handleChangeImage = (e) => {
    const file = e.target.files[0]
    setFile(file)
    if (file !== '') {
      const imageURL = URL.createObjectURL(file)
      setImageURL(imageURL)
    } else {
      setImageURL('')
    }
  }


  if (user) {
    return (
      <Container>
        <Div direction='column'>
        {showEdit ? <div>
          <input style={{ display: 'none' }} type='file' onChange={handleChangeImage} accept='image/*' ref={inputFileRef} />
          {imageURL === '' ? <div><div style={{ fontSize: 120 }}>
            <ImImage />
          </div></div> : <div>
            <ImageCard width='180' height='180' src={imageURL} alt={imageURL} />
          </div>}
          <Button color='#ffffff'  border='#000000' background='#000000'  onClick={clickInputFile} >Selecionar Imagem</Button>
        </div> : <div>
          <ImageCard width='180' height='180' radius='20%' src={image} alt={image} />
        </div>}

        <Div width='93%' margin='10px 0' direction='column' background='#ffffff' radius='10%'>
        <div>
          {showEdit ? <div><b>Nome do produto:</b><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></div> : <div>{product?.name}</div>}
        </div>
        <div>
          {showEdit ? <div><b>Categoria:</b><select type='text' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Nenhum</option>
            {categories.map((category) => <option key={category._id} >{category?.name}</option>)}</select></div> :
            <div><b>Categoria:</b> <div>{product?.category?.name}</div></div>}
        </div>

        <div>
          {typeUser === 'admin' && showEdit ? <div><b>Preço pago</b><input type='text' value={price} onChange={(e) => setPrice(e.target.value)} /> </div> : <div><b>Preço pago:</b> <div>R${product?.price}</div></div>}
        </div>

        <div>
          {showEdit ? <div><b>Preço de atacado</b><input type='text' value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} /> </div> : <div><b>Preço de atacado:</b> <div>R${product?.wholesale_price}</div></div>}
        </div>

        <div>
          {showEdit ? <div><b>Preço de varejo:</b><input type='text' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} /></div> : <div><b>Preço de varejo:</b> <div>R${product?.retail_price}</div></div>}
        </div>

        <div>
          {showEdit ? <div><b>Estoque:</b><input type='text' value={stock} onChange={(e) => setStock(e.target.value)} /></div> : <div><b>Estoque:</b> <div>{product?.stock} unidades</div></div>}
        </div>

        <div>
          {showEdit ? <div><b>Valor da comissão</b><input type='text' value={commission} onChange={(e) => setCommission(e.target.value)} /> </div> : <div><b>Valor da comissão:</b> <div>R${product?.commission_amount}</div></div>}
        </div>

        <div>
          {typeUser === 'admin' && showEdit ? <div><b>Descrição:</b><input type='text' value={description} onChange={(e) => setDescription(e.target.value)} /></div> : <div><b>Descrição:</b> <div>{product?.description}</div></div>}
        </div>
       </Div>
        <Buttons direction='row' width='80%' justifyContent='center'>
        {typeUser === 'admin' && showEdit ? <Button  color='#ffffff'  border='#00914c' background='#00914c' type='submit' onClick={() => updateProduct(product)}>Salvar Alterações</Button> : <Button color='#ffffff'  border='#3c6c94' background='#3c6c94' type='submit' onClick={() => setShowEdit(true)}>Atualizar produto</Button>}
        {typeUser === 'admin' && <Button color='#ffffff'  background='#e50e0e' border='#e50e0e' onClick={() => deleteProduct(product._id)} >Excluir Produto</Button>}
        </Buttons>
        </Div>
      </Container>
    )
  } else {
    return <NoUser />
  }
}
