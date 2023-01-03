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
      await this.api.post('/category',object)
    } catch (error) {
      throw error
    }
  }
}
export default new Api()