import axios from 'axios'

const baseURL = 'http://localhost:5000/todolist/'

export const getPostAPI = async () =>{
    const posts = await axios.get(baseURL)
    return posts
}

export const createPostAPI = async(newItem) =>{
    return await axios.post(baseURL, newItem)
}

export const toggleDoneAPI = async(id) =>{
    return await axios.get(`${baseURL}/${id}/`)
}