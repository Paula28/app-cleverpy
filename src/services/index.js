import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = () => {
    return axios.get(`${baseUrl}/posts`);
}
