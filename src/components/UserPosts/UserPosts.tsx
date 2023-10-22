import { FC, useEffect, useState } from 'react';
import PostCard, { IPostCardProps } from '../PostCard/PostCard';

export interface IPostData extends IPostCardProps {
    id: number;
    userId: number;
}

export interface IUserPostsProps {
    posts: IPostData[];
    userID: number;
}

const UserPosts: FC<IUserPostsProps> = (props) => {
    const { posts, userID } = props;
    const [filteredPosts, setFilteredPosts] = useState<Array<IPostData>>([]);

    useEffect(() => {
        setFilteredPosts(posts.filter((post) => post.userId === userID));
    }, [userID]);

    return (
        <div>
            {filteredPosts.map((post) => {
                const { id } = post;
                return <PostCard title={post.title} body={post.body} key={id} />;
            })}
        </div>
    );
};

export default UserPosts;
