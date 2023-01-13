import React from 'react'
import {CardProduct, DivLink, ImageCard} from '../design/styled.components'
export const Product = ({product}) => {
    const {_id,name,stock,imageURL,wholesale_price} = product
  return (
    <CardProduct>
    <DivLink color='black' to={`/produto/${_id}`} >
       <div>
        <p>{name[0].toUpperCase() + name.slice(1,name.length)}</p>
        <p>{stock} unidades</p>
        <p>Preço Atacado R${wholesale_price}</p>
        </div>
      <div>  
        <ImageCard width='80' height='80' src={imageURL} alt={imageURL}/>
        </div>
        </DivLink>
    </CardProduct>
  )
}
