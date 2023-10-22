import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

type TResponse = Array<any>;

export const getUsers = () => {
    return axios.get<TResponse>(URL).then((res) => res.data);
};
