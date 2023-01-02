import React from 'react'

export const Category = ({category}) => {
  return (
    <div>
      <button>{category.name}</button>
    </div>
  )
}
