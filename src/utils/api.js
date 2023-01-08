import axios from 'axios'
class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/'
    })

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`
          }
        }
        return token
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) =>{
        console.log(error)
      }
    )
  }

  signUp = async (newUser) => {
    try {
      await this.api.post('/signup', newUser)
    } catch (error) {
      throw error
    }
  }
  logIn = async (loginInfo) => {
    try {
      const { data } = await this.api.post('/login', loginInfo)
      localStorage.setItem('token', data.token)
    } catch (error) {
      throw error
    }
  }
  getProducts = async () => {
    try {
      const { data } = await this.api.get('/product')
      return data
    } catch (error) {
      throw error
    }
  }
  getProduct = async (idProduct) => {
    try {
      const { data } = await this.api.get(`/product/${idProduct}`)
      return data
    } catch (error) {
      throw error
    }
  }
  getProductsFiltered = async (idCategory) => {
    try {
      const { data } = await this.api.get(`/productFiltered/${idCategory}`)
      return data
    } catch (error) {
      throw error
    }
  }
  getProductSearched = async (value) => {
    try {
      const { data } = await this.api.get(`/product/search/${value}`)
      return data
    } catch (error) {
      throw error
    }
  }
  postProduct = async (newProduct) => {
    try {
      await this.api.post('/product', newProduct)
    } catch (error) {
      throw error
    }
  }
  putProduct = async (idProduct, update) => {
    try {
      await this.api.put(`/product/${idProduct}`, update)
    } catch (error) {
      throw error
    }
  }
  putProductsStock = async (idOrder) => {
    try {
      await this.api.put(`product/stock/${idOrder}`)
    } catch (error) {
      throw error
    }
  }
  deleteProduct = async (idProduct) => {
    try {
      await this.api.delete(`/product/${idProduct}`)
    } catch (error) {
      throw error
    }
  }
  getCategories = async () => {
    try {
      const { data } = await this.api.get('/category')
      return data
    } catch (error) {
      throw error
    }
  }
  postCategory = async (newCategory) => {
    try {
      await this.api.post('/category', newCategory)
    } catch (error) {
      throw error
    }
  }
  getOrders = async () => {
    try {
      const { data } = await this.api.get('/order')
      return data
    } catch (error) {
      throw error
    }
  }
  getOrder = async (idOrder) => {
    try {
      const { data } = await this.api.get(`/order/${idOrder}`)
      return data
    } catch (error) {
      throw error
    }
  }
  postOrder = async (newOrder) => {
    try {
      const { data } = await this.api.post('/order', newOrder)
      return data
    } catch (error) {
      throw error
    }
  }
  putOrder = async (idOrder, update) => {
    try {
      await this.api.put(`/order/${idOrder}`, update)
    } catch (error) {
      throw error
    }
  }
  deleteOrder = async (idOrder) => {
    try {
      await this.api.delete(`/order/${idOrder}`)
    } catch (error) {
      throw error
    }
  }
}
export default new Api()