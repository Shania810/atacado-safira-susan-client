import React from 'react'

export const Search = ({search,changeInputSearch}) => {
  return (
    <div>
      <input type='text' value={search} onChange={(e)=> changeInputSearch(e,search)} />
    </div>
  )
}
