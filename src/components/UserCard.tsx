import { Link } from 'react-router-dom';
import { UserResponse } from '../interfaces/main';

const UserCard = ({ item }: { item: UserResponse }) => {
  return (
    <Link to={`/user/${item.id}`} className='card'>
      <div className='row'>
        <h2>{item.name}</h2>
        <span>({item.username})</span>
      </div>
      <span>
        <span className='label'>Phone: </span>
        {item.phone}
      </span>
      <span>
        <span className='label'>Email: </span>
        {item.email}
      </span>
    </Link>
  );
};

export default UserCard;
