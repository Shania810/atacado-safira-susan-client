import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api'
import { ImImage } from 'react-icons/im'
import { Button, Container, Div, Label, Title} from '../design/styled.components'

export const AddProduct = () => {
  const [categories, setCategories] = useState([])
  const inputFileRef = useRef()
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [file, setFile] = useState('')
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
      const newProduct = await Api.postProduct(product)
      await Api.uploadImageProduct(newProduct._id, file)
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
  
  return (
    <Container alignItems='center' >
      <Title bold='bold' >Novo produto</Title>
      <div>
        <input style={{ display: 'none' }} type='file' onChange={handleChangeImage} accept='image/*' ref={inputFileRef} />
        {imageURL === '' ? <div style={{ fontSize: 120 }}>
          <ImImage />
        </div> : <div>
          <img style={{ maxWidth: 200, width: '100%', maxHeight: 300, height: '100%' }} src={imageURL} alt={imageURL} />
        </div>}
        <Button  color='#ffffff'  border='#000000' background='#000000' onClick={clickInputFile} >Selecionar Image</Button>
      </div>
      <form onSubmit={newProduct} >
       <Div direction='column' background='#ffffff' margin='8px' padding='20px' radius='10%'  >
        <div>
          <Label>Nome do produto</Label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label>Categoria</Label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Nenhum</option>
            {categories.map((category) => <option key={category._id} >{category.name}</option>)}
          </select>
        </div>
        <div>
          <Label>Estoque</Label>
          <input type='text' value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <div>
          <Label>Valor da comissão</Label>
          <input type='text' value={commission} onChange={(e) => setCommission(e.target.value)} />
        </div>
        <div>
          <Label>Preço pago</Label>
          <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <Label>Preço de atacado</Label>
          <input type='text' value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} />
        </div>
        <div>
          <Label>Preço de varejo</Label>
          <input type='text' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} />
        </div>
        <div>
          <Label>Descrição</Label>
          <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        </Div>
        <Div>
        <Button color='#ffffff'  border='#00914c' background='#00914c' type='submit'>Adicionar produto</Button>
        </Div>
      </form>
    </Container>
  )
}
