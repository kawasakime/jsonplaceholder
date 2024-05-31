import { useCallback, useEffect } from 'react';
import { useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/slices/users';
import UserCard from '../components/UserCard';
import { UserResponse } from '../interfaces/main';

import '../styles/main.css';

const Users = () => {
  const { items } = useAppSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

    dispatch(setUsers(data));
  }, []);

  const renderItem = useCallback((item: UserResponse) => {
    return <UserCard item={item} />;
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return <div className='users'>{items.map(renderItem)}</div>;
};

export default Users;
