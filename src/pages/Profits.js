import React, { useEffect, useState } from 'react'
import Api from '../utils/api'

export const Profits = () => {
  const [profits,setProfits] = useState([])
  useEffect(()=>{
    const allProfits = async()=>{
      try {
        const profits = await Api.getProfits()
        setProfits(profits)
      } catch (error) {
        console.log(error)
      }
    }
    allProfits()
  },[])
  return (
    <div>
      <h1>Lucros</h1>
    </div>
  )
}
