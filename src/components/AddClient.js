import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api'

export const AddClient = () => {
  const [name,setName] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const [cpf,setCpf] = useState('')
  const [cnpj,setCnpj] = useState('')

  const navigate = useNavigate()

  const addClient = async(e)=>{
    e.preventDefault()
    const client = {
      name,
      address,
      phone,
      cpf : cpf === '' ? false : cpf,
      cnpj: cnpj === '' ? false : cnpj
    }
    try {
      await Api.postClient(client)
      navigate('/clientes')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e)=> addClient(e)} >
       <h1>Novo Cliente</h1>
       <div>
         <label><b>Nome do cliente</b></label>
         <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
       </div>
       <div>
        <label><b>Endereço do cliente</b></label>
        <input type='text' value={address} onChange={(e)=> setAddress(e.target.value)}/>
       </div>
       <div>
        <label><b>Telefone de contato</b></label>
        <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
       </div>
       <div>
        <label><b>CPF</b></label>
        <input type='text' value={cpf} onChange={(e)=> setCpf(e.target.value)}/>
       </div>
       <div>
        <label><b>CNPJ</b></label>
        <input type='text' value={cnpj} onChange={(e)=> setCnpj(e.target.value)}/>
       </div>
       <button type='submit'>Adicionar Cliente</button>
    </form>
  )
}
