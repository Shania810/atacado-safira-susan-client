import React from 'react'

export const Search = ({search,searchProduct}) => {
  return (
    <div>
      <input type='text' value={search} onChange={(e)=> searchProduct(e,search)} />
    </div>
  )
}
