import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../../domain/store';
import { getPosts } from '../../api/posts/getPosts';
import { getUsers } from '../../api/users/getUsers';
import { userActions } from '../../domain/store/userSlice/userSlice';
import { postsActions } from '../../domain/store/postsSlice/postsSlice';

interface ILoadingProviderProps {
    children: ReactNode;
}

const LoadingProvider: FC<ILoadingProviderProps> = (props) => {
    const { children } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        getUsers().then((users) => {
            dispatch(userActions.setUsers(users));
        });
        getPosts().then((posts) => {
            dispatch(postsActions.setPosts(posts));
        });
    }, []);

    return <>{children}</>;
};

export default LoadingProvider;
