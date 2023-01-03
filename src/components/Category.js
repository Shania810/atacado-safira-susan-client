import React from 'react'

export const Category = ({ category }) => {
  return (
    <div>
      <button>{category[0].toUpperCase() + category.slice(1,category._id)}</button>
    </div>
  )
}
