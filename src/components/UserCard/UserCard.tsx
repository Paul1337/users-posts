import cls from './UserCard.module.css';
import classNames from 'classnames';

interface IUserCardProps {
    name: string;
    isSelected: boolean;
    onClick: () => void;
}

const UserCard = (props: IUserCardProps) => {
    const { name, onClick, isSelected } = props;
    return (
        <div className={classNames(cls.UserCard, isSelected && cls.selected)} onClick={onClick}>
            User name:
            <h1>{name}</h1>
        </div>
    );
};

export default UserCard;
