import React from 'react'
import { Button} from '../design/styled.components'

export const Category = ({ category, productsFiltered }) => {
  return (
    <div>
      <Button bold='true' size={20} color='#0a7568' background='#acccbc' border='#0a7568' onClick={() => productsFiltered(category._id)} >{category.name[0].toUpperCase() + category.name.slice(1, category.name.length)}</Button>
    </div>
  )
}
