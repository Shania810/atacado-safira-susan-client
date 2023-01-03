import React, { useEffect, useState } from 'react'
import { CategoriesCard } from '../design/styled.components'
import Api from '../utils/api'
import { AddCategory } from './AddCategory'
import { Category } from './Category'

export const Categories = ({productsFiltered}) => {
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
      {categories.map((category) => <Category key={category._id} category={category} productsFiltered={productsFiltered}/>)}
      <AddCategory allCategories = {allCategories} />
    </CategoriesCard>
  )
}
