import React, { useState } from 'react'
import Api from '../utils/api'
export const AddCategory = ({allCategories}) => {
  const [category,setCategory] = useState('')
  const newCategory = async (e) =>{
    e.preventDefault()
    try {
      await Api.postCategory({name: category})
      allCategories()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e)=>newCategory(e)}>
        <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)}/>
    </form>
  )
}
