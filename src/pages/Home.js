import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>Atacado Safira Susan</h1>
        <button><Link to='/stock'>Stock</Link></button>
    </div>
  )
}
