import axios from 'axios';
import { IPost } from '../../domain/post/model';

const URL = 'https://jsonplaceholder.typicode.com/posts';

type TResponse = Array<IPost>;

export const getPosts = () => {
    return axios.get<TResponse>(URL).then((res) => res.data);
};
