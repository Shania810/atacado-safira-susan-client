import React from 'react'

export const Category = ({ category, productsFiltered }) => {
  return (
    <div>
      <button onClick={() => productsFiltered(category._id)} >{category.name[0].toUpperCase() + category.name.slice(1, category.name.length)}</button>
    </div>
  )
}
