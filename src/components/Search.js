import React from 'react'

export const Search = ({search,searchProduct,inputSearch}) => {
  return (
    <form onSumit={searchProduct}>
      <input type='text' value={search} onChange={inputSearch} />
    </form>
  )
}
