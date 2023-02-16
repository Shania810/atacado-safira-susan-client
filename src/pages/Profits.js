import React, { useEffect, useState } from 'react'
import Api from '../utils/api'
import { Profit } from '../components/Profit'
import { NoAuthorization } from './NoAuthorization'
import { NoUser } from './NoUser'

export const Profits = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const [profits, setProfits] = useState([])
  useEffect(() => {
    const allProfits = async () => {
      try {
        const profits = await Api.getProfits()
        setProfits(profits)
      } catch (error) {
        console.log(error)
      }
    }
    allProfits()
  }, [])
  if (user) {
    if (typeUser === 'admin') {
      return (
        <div>
          <h1>Lucros</h1>
          <div>
            {profits.map((profit,index) => <Profit key={index} data={profit} />)}
          </div>
        </div>
      )
    } else {
      return <NoAuthorization />
    }
  } else {
    return <NoUser />
  }
}
