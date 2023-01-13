import React from 'react'
import {CardProduct, DivLink, ImageCard} from '../design/styled.components'
export const Product = ({product}) => {
    const {_id,name,stock,imageURL} = product
  return (
    <CardProduct>
    <DivLink color='black' to={`/produto/${_id}`} >
        <div>{name[0].toUpperCase() + name.slice(1,name.length)}</div>
        <div>
        <ImageCard height='130' src={imageURL} alt={imageURL}/>
        </div>
        <div>Estoque: {stock}</div>
        </DivLink>
    </CardProduct>
  )
}
