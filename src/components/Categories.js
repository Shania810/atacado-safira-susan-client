import React, { useEffect, useState } from 'react'
import { Button, ButtonLink, CategoriesCard } from '../design/styled.components'
import Api from '../utils/api'
import { Category } from './Category'

export const Categories = ({allProducts,productsFiltered,user}) => {
  const [categories, setCategories] = useState([])
  const allCategories = async () => {
    try {
      const categories = await Api.getCategories()
      setCategories(categories)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    allCategories()
  }, [])
  return (
    <CategoriesCard>
      <Button bold='true' size={20} color='#0a7568' background='#acccbc' border='#0a7568' onClick={allProducts}>Todos</Button>
      {categories.map((category,index) => <Category key={index} category={category} productsFiltered={productsFiltered}/>)}
      {user === 'admin' && <Button bold='true' size={20} color='#0a7568' background='#acccbc' border='#0a7568' ><ButtonLink to='/novoProduto' color='#0a7568'>Nova Categoria</ButtonLink></Button>}
    </CategoriesCard>
  )
}
