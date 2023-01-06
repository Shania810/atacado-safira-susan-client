import React from 'react'

export const Order = ({item,orderItem,updateOrder}) => {
  return (
    <tr>
      <td>{item + 1}</td>
      <td>{orderItem.name}</td>
      <td><input type='text' onChange={(e)=> {
        orderItem.quantity = Number(e.target.value !== '' && e.target.value)
        updateOrder()
      }}/></td>
      <td>{orderItem.quantity >= 6 ? orderItem.wholesale_price : orderItem.retail_price}</td>
      <td>{orderItem.total}</td>
    </tr>
  )
}
