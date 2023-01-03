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
  putProduct = async (idProduct, update) => {
    try {
      await this.api.put(`/product/${idProduct}`, update)
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
}
export default new Api()