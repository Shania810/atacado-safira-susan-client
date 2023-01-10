import React from 'react'

export const Profit = ({data}) => {
  const {date,profit} = data
  return (
    <div>
      <div><b>{date}</b></div>
      <div>Lucro: {profit}</div>
    </div>
  )
}
