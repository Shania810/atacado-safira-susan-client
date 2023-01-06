import React, { useEffect, useState } from 'react'
import { Search } from './Search'
import Api from '../utils/api'
import { Order } from './Order'
import { useNavigate } from 'react-router-dom'
export const AddOrder = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [orderItems, setOrderItems] = useState([])
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const changeInputSearch = async (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    const searchProduct = async () => {
      try {
        const searchedProducts = await Api.getProductSearched(search === '' ? false : search)
        setProducts(searchedProducts)
      } catch (error) {
        console.log(error)
      }
    }
    searchProduct()
  }, [search])
  const addOrderItem = (product) => {
    const validate = orderItems.filter((orderItem) => orderItem.name === product.name)
    if (validate.length >= 1) {
      console.log('já existe')
    } else {
      setOrderItems([...orderItems, { ...product, quantity: 1, total: product.retail_price }])
    }
  }
  useEffect(() => {
    const updateOrder = () => {
      orderItems.forEach(orderItem => {
        if (orderItem.quantity <= 6) {
          orderItem.total = orderItem.quantity * orderItem.retail_price
        } else {
          orderItem.total = orderItem.quantity * orderItem.wholesale_price
        }
      });
      const orderItemsTotal = orderItems.map(({ quantity, wholesale_price, retail_price }) => quantity <= 6 ? quantity * retail_price : quantity * wholesale_price)
      const total = orderItemsTotal?.reduce((cu, acc) => cu + acc, 0)
      setTotal(total)
    }
    updateOrder()
  }, [orderItems])
  const addOrder = async () => {
    const order = {
      orderItems: orderItems.map(({ _id, quantity }) => { return { ...{ product: _id }, quantity: quantity } }),
      seller: 'Atacado Safira Susan'
    }
    try {
      const newOrder = await Api.postOrder(order)
      await Api.putProductsStock(newOrder._id)
      navigate('/pedidos')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Search search={search} changeInputSearch={changeInputSearch} />
      {products?.map((product) => {
        return <div key={product._id} onClick={() => addOrderItem(product)}>
          <div>{product.name}</div>
          <div>{product.stock}</div>
          <div>{product.category.name}</div>
        </div>
      })}
      {orderItems.length !== 0 &&
        <div><table>
          <thead>
            <tr>
              <td>Item</td>
              <td>Produto</td>
              <td>Quantidade</td>
              <td>Preço</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((orderItem, item) => <Order key={orderItem._id} item={item} orderItem={orderItem} />)}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
          <button onClick={addOrder}>Salvar Venda</button>
        </div>}
    </div>
  )
}
