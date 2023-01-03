import React, { useState } from 'react'
import Api from '../utils/api'
export const AddCategory = () => {
  const [category,setCategory] = useState('')
  const newCategory = async (e) =>{
    e.preventDefault()
    try {
      await Api.postCategory({category: category})
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
