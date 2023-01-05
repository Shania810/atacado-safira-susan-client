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
  getProductsFiltered = async (categoryId) => {
    try {
      const { data } = await this.api.get(`/productFiltered/${categoryId}`)
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
  getCategories = async () => {
    try {
      const { data } = await this.api.get('/category')
      return data
    } catch (error) {
      throw error
    }
  }
  postCategory = async (object) => {
    try {
      await this.api.post('/category', object)
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
      await this.api.post('/order', newOrder)
    } catch (error) {
      console.log(error)
    }
  }
}
export default new Api()