import axios from 'axios'

const baseURL = 'https://danielyip-todolist-backend.herokuapp.com/todolist'

export const getPostAPI = async () =>{
    const posts = await axios.get(baseURL)
    return posts
}

export const createPostAPI = async(newItem) =>{
    return await axios.post(baseURL, newItem)
}

export const toggleDoneAPI = async(id) =>{
    return await axios.patch(`${baseURL}/${id}/checked`)
}

export const deleteItemAPI = async (id) =>{
    return await axios.delete(`${baseURL}/${id}`)
}