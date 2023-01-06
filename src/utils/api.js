import axios from 'axios'
class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/'
    })
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