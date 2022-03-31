import axios from 'axios'

const baseURL = 'http://localhost:5000/todolist/'

export const getPostAPI = async () =>{
    const posts = await axios.get(baseURL)
    return posts
}