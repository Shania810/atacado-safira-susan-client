import React from 'react'
import { AddOrder } from '../components/AddOrder'
import { NoUser } from './NoUser'

export const NewOrder = () => {
    const user = localStorage.getItem('token')
    if (user) {
        return (
            <div>
                <h1>Novo Pedido</h1>
                <AddOrder />
            </div>
        )
    } else {
        return <NoUser />
    }
}
