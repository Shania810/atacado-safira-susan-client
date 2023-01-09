import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NoUser } from './NoUser'
import { NoAuthorization } from './NoAuthorization'
import Api from '../utils/api'

export const Client = () => {
  const user = localStorage.getItem('token')
  const typeUser = localStorage.getItem('role')
  const { id } = useParams()
  const [client, setClient] = useState({})

  useEffect(() => {
    const getClient = async () => {
      try {
        const client = await Api.getClient(id)
        setClient(client)
      } catch (error) {
        console.log(error)
      }
    }
    getClient()
  }, [id])
console.log(client)
  if (user) {
    if (typeUser === 'admin') {
      return (
        <div key={client._id} >
          <h1>Cliente {client.name}</h1>
          <div><b>Endereço:</b> {client.address}</div>
          <div><b>Telefone de contato:</b> {client.phone}</div>
          <div><b>{client.cpf ? 'CPF' : 'CNPJ'}:</b> {client.cpf ? client.cpf : client.cnpj }</div>
        </div>
      )
    } else {
      return <NoAuthorization />
    }
  } else {
    return <NoUser />
  }
}
