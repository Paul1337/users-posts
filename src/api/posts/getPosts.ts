import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

type TResponse = Array<any>;

export const getPosts = () => {
    return axios.get<TResponse>(URL).then((res) => res.data);
};
