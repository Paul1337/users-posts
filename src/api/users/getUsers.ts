import axios from 'axios';
import { IUser } from '../../domain/user/model';

const URL = 'https://jsonplaceholder.typicode.com/users';

type TResponse = Array<IUser>;

export const getUsers = () => {
    return axios.get<TResponse>(URL).then((res) => res.data);
};
