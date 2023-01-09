import React, { useEffect, useState } from 'react'
import { Search } from '../components/Search'
import { NoUser } from './NoUser'
import { NoAuthorization } from './NoAuthorization'
import Api from '../utils/api'
import { Link } from 'react-router-dom'

export const Clients = () => {
    const user = localStorage.getItem('token')
    const typeUser = localStorage.getItem('role')
    const [clients, setClients] = useState([])
    const [search, setSearch] = useState('')

    const changeInputSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const searchClients = async () => {
            try {
                const searchedClients = await Api.getSearchedClients(search === '' ? false : search)
                setClients(searchedClients)
            } catch (error) {
                console.log(error)
            }
        }
        searchClients()
    }, [search])
    if (user) {
        if (typeUser === 'admin') {
            return (
                <div>
                    <h1>Clientes</h1>
                    <Search search={search} changeInputSearch={changeInputSearch} />
                    {clients.map((client) => {
                        return <div key={client._id}>
                            <div>{client.name}</div>
                            <button><Link to={`/cliente/${client._id}`}>Veja mais detalhes</Link></button>
                        </div>
                    })}
                    <button><Link to='/novoCliente'>Cadastrar Cliente</Link></button>
                </div>

            )
        } else {
            return <NoAuthorization />
        }
    } else {
        return <NoUser />
    }
}
