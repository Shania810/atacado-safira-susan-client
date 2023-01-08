import React from 'react'
import { AddProduct } from '../components/AddProduct'
import { NoUser } from './NoUser'

export const NewProduct = () => {
    const user = localStorage.getItem('token')
    if (user) {
        return <AddProduct />
    } else {
        return <NoUser />
    }
}
