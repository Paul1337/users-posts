import UserCard from './components/UserCard/UserCard';
import UserPosts from './components/UserPosts/UserPosts';
import cls from './App.module.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api/posts/getPosts';
import { getUsers } from './api/users/getUsers';

export type TPostsState = Array<any>;
export type TUsersState = Array<TUsersState>;

function App() {
    const [posts, setPosts] = useState<TPostsState>([]);
    const [users, setUsers] = useState<TUsersState>([]);
    const [selectedUser, setSelectedUser] = useState<number>(-1);

    useEffect(() => {
        getUsers().then((users) => setUsers(users));
    }, []);

    useEffect(() => {
        getPosts().then((posts) =>
            setPosts(posts.filter((post) => post.userId === users[selectedUser].id))
        );
    }, [selectedUser]);

    const handleUserCardClick = (ind: number) => {
        setSelectedUser(ind);
    };

    return (
        <div className={cls.App}>
            <div className={cls.usersCont}>
                {users.map((user: any, ind: number) => (
                    <UserCard
                        isSelected={selectedUser === ind}
                        name={user.name}
                        onClick={() => handleUserCardClick(ind)}
                    />
                ))}
            </div>
            <div className={cls.postsCont}>
                {posts.length === 0 ? (
                    <p>Выбери пользователя для просмотра его постов. Они отобразятся здесь</p>
                ) : (
                    <>
                        <p>
                            Посты для пользователя {users[selectedUser].name} (
                            {users[selectedUser].username})
                        </p>
                        <UserPosts posts={posts} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
