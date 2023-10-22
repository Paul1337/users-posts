import { FC } from 'react';
import PostCard, { IPostCardProps } from './PostCard/PostCard';

export interface IPostData extends IPostCardProps {
    id: number;
}

export interface IUserPostsProps {
    posts: IPostData[];
}

const UserPosts: FC<IUserPostsProps> = (props) => {
    const { posts } = props;
    return (
        <div>
            {posts.map((post) => {
                const { id, ...otherProps } = post;
                return <PostCard {...otherProps} key={id} />;
            })}
        </div>
    );
};

export default UserPosts;
