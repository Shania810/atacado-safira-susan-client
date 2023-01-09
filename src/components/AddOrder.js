import React, { useEffect, useState } from 'react'
import { Search } from './Search'
import Api from '../utils/api'
import { Order } from './Order'
import { useNavigate } from 'react-router-dom'
export const AddOrder = () => {
  const [products, setProducts] = useState([])
  const [clients,setClients] = useState([])
  const [orderItems, setOrderItems] = useState([])

  const [search, setSearch] = useState('')
  const [searchClient,setSearchClient] = useState('')
  
  const [total, setTotal] = useState(0)
  const [payment,setPayment] = useState('')
  const [client,setClient] = useState('')

  const [value,setValue] = useState(false)

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

  const updateOrder = () => {
    orderItems.forEach(orderItem => {
      if (orderItem.quantity < 6) {
        orderItem.total = orderItem.quantity * orderItem.retail_price
      } else {
        orderItem.total = orderItem.quantity * orderItem.wholesale_price
      }
    });
    const orderItemsTotal = orderItems.map(({ quantity, wholesale_price, retail_price }) => quantity < 6 ? quantity * retail_price : quantity * wholesale_price)
    const total = orderItemsTotal?.reduce((cu, acc) => cu + acc, 0)
    setTotal(total)
  }

  useEffect(() => {
    const updateOrder = () => {
      orderItems.forEach(orderItem => {
        if (orderItem.quantity < 6) {
          orderItem.total = orderItem.quantity * orderItem.retail_price
        } else {
          orderItem.total = orderItem.quantity * orderItem.wholesale_price
        }
      });
      const orderItemsTotal = orderItems.map(({ quantity, wholesale_price, retail_price }) => quantity < 6 ? quantity * retail_price : quantity * wholesale_price)
      const total = orderItemsTotal?.reduce((cu, acc) => cu + acc, 0)
      setTotal(total)
    }
    updateOrder()
  }, [orderItems])

  const addOrder = async () => {
    const order = {
      orderItems: orderItems.map(({ _id, quantity }) => { return { ...{ product: _id }, quantity: quantity } }),
      payment,
      client
    }
    try {
      const newOrder = await Api.postOrder(order)
      await Api.putProductsStock(newOrder._id)
      navigate('/pedidos')
    } catch (error) {
      console.log(error)
    }
  }

  const changeInputSearchClient = (e) =>{
     setSearchClient(e.target.value)
  }
  useEffect(()=>{
    const searchClients = async()=>{
      try {
        const searchedClients = await Api.getSearchedClients(searchClient === '' ? false : searchClient )
        setClients(searchedClients)
      } catch (error) {
        console.log(error)
      }
    }
    searchClients()
  },[searchClient])
  

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
            {orderItems.map((orderItem, item) => <Order key={orderItem._id} item={item} orderItem={orderItem} updateOrder={updateOrder} />)}
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
        <div>
          <label><b>Forma de pagamento</b></label>
          <button onClick={()=> setPayment('dinheiro')} >Dinheiro</button>
          <button onClick={()=> setPayment('cartão')} >Cartão</button>
          <button onClick={()=> setPayment('dívida')} >Dívida</button>
          <button onClick={()=> setPayment('pix')} >Pix</button>
        </div>
        <div>
          {value ? <div>
          <Search  search={searchClient} changeInputSearch={changeInputSearchClient} />
           {clients?.map((client) => {
        return <div key={client._id} onClick={() => {setClient(client._id)}}>
          <div>{client.name}</div>
          <div>{client.address}</div>
        </div>}
      )}
      </div>: <button onClick={()=> setValue(true)}>Insira um cliente</button>}
        </div>
          <button onClick={addOrder}>Salvar Venda</button>
        </div>}
    </div>
  )
}
