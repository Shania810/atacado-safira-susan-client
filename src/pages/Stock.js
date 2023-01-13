import React, { useEffect, useState } from 'react'
import { Categories } from '../components/Categories'
import { Products } from '../components/Products'
import { NoUser } from './NoUser'
import Api from '../utils/api'
import { Button, ButtonLink, Container, Div, Title } from '../design/styled.components'

export const Stock = () => {
  const [products, setProducts] = useState([])
  const typeUser = localStorage.getItem('role')
  const user = localStorage.getItem('token')
  useEffect(() => {
    const allProducts = async () => {
      try {
        const products = await Api.getProducts()
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    allProducts()
  }, [])
  const productsFiltered = async (category) => {
    try {
      const productsFiltered = await Api.getProductsFiltered(category)
      setProducts(productsFiltered)
    } catch (error) {
      console.log(error)
    }
  }
  if (user) {
    return (
      <Container>
        <Title><h1>Estoque</h1></Title>
        <div>
          <Categories productsFiltered={productsFiltered} user={typeUser} />
          <Products products={products} />
          {typeUser === 'admin' && <Div background='#f0f0f0' position='fixed' zIndex='1' bottom='0' >
            <Button background='#a0bfd8' border='#3c6c94'><ButtonLink color='#3c6c94' to='/novoProduto'>Adicione Produto</ButtonLink></Button>
          </Div>}
        </div>
      </Container>
    )
  } else {
    return <NoUser />
  }
}
