import { FC } from 'react';
import cls from './PostCard.module.css';

export interface IPostCardProps {
    title: string;
    body: string;
}

const PostCard: FC<IPostCardProps> = (props) => {
    const { title, body } = props;
    return (
        <div className={cls.PostCard}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;
