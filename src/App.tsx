import UserCard from './components/UserCard/UserCard';
import UserPosts from './components/UserPosts/UserPosts';
import cls from './App.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './domain/store';
import { IUser } from './domain/user/model';

function App() {
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const posts = useSelector((state: RootState) => state.posts.posts);
    const users = useSelector((state: RootState) => state.user.users);

    return (
        <div className={cls.App}>
            <div className={cls.usersCont}>
                {users.map((user: any) => (
                    <UserCard
                        key={user.id}
                        isSelected={selectedUser === user}
                        name={user.name}
                        onClick={() => setSelectedUser(user)}
                    />
                ))}
            </div>
            <div className={cls.postsCont}>
                {!selectedUser ? (
                    <p>Выбери пользователя для просмотра его постов. Они отобразятся здесь</p>
                ) : (
                    <>
                        <p>
                            Посты для пользователя {selectedUser?.name} ({selectedUser?.username})
                        </p>
                        <UserPosts userID={selectedUser?.id} posts={posts} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
