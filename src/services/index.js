import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = () => {
    return axios.get(`${baseUrl}/posts`);
}

export const getDetailPost= (id) => {
    return axios.get(`${baseUrl}/posts/${id}`);
}

export const getCommentsInPost= (id) => {
    return axios.get(`${baseUrl}/posts/${id}/comments`);
}

export const getAllUsers = () => {
    return axios.get(`${baseUrl}/users`);
}