import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { Category } from './Category'

export const Categories = () => {
  const [categories, setCategories] = useState([])
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
    categories.map((category) => <Category key={category._id} category={category.name} />)
  )
}
