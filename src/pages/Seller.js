import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Api from '../utils/api'
import { NoUser } from './NoUser'
import { NoAuthorization } from './NoAuthorization'

export const Seller = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const { id } = useParams()
  const [seller, setSeller] = useState({})
  const [commission, setCommission] = useState(0)
  const [commissions, setCommissions] = useState([])

  useEffect(() => {
    const getSeller = async (idSeller) => {
      try {
        const seller = await Api.getSeller(idSeller)
        setSeller(seller)
      } catch (error) {
        console.log(error)
      }
    }
    getSeller(id)
  }, [id])
  useEffect(() => {
    const totalCommission = () => {
      const arrayCommissiosByOrder = seller?.orders?.map((order) => order.commission_total)
      if (arrayCommissiosByOrder) {
        const sumCommission = arrayCommissiosByOrder.reduce((acc, cu) => acc + cu, 0)
        setCommission(sumCommission)
      }
    }
    totalCommission()
  }, [seller])
  useEffect(() => {
    const getCommissions = async (idSeller) => {
      try {
        const commissions = await Api.getCommissionsBySeller(idSeller)
        setCommissions(commissions)
      } catch (error) {
        console.log(error)
      }
    }
    getCommissions(id)
  }, [id])

  if (user) {
    if (typeUser === 'admin') {
      return (
        <div>
          <div>
            <h1>Total de comissão</h1>
            <h2>{commission}</h2>
          </div>
          <h1>Vendedor(a){seller.name}</h1>
          <h2>Pedidos</h2>
          {seller?.orders?.map((order) => {
            return <div key={order._id} >
              <h3>Pedido de {order.client.name}</h3>
              <h4>Total da comissão do pedido: {order.commission_total}</h4>
              <button><Link to={`/pedido/${order._id}`} >Veja mais detalhe do pedido</Link></button>
            </div>
          })}
          <div>
            <h1>Comissão diária</h1>
            <div>
              {commissions.map(({ date, commission }, index) => {
                return <div key={index}>
                  <div><b>{date}</b></div>
                  <div>{commission}</div>
                </div>
              })}
            </div>
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
