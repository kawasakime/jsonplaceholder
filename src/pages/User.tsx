import { useParams } from 'react-router-dom';

import '../styles/main.css';
import { useCallback, useEffect, useState } from 'react';
import { UserResponse } from '../interfaces/main';

const User = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<null | UserResponse>(null);

  const getUser = useCallback(async () => {
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();

    setUser(data);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className='user'>
      <div className='row'>
        <p>Name:</p>
        <span>{user.name}</span>
      </div>
      <div className='row'>
        <p>Username:</p>
        <span>{user.username}</span>
      </div>
      <div className='row'>
        <p>Phone:</p>
        <span>{user.phone}</span>
      </div>
      <div className='row'>
        <p>Email:</p>
        <span>{user.email}</span>
      </div>
      <div className='row'>
        <p>Website:</p>
        <span>{user.website}</span>
      </div>
      <div className='row'>
        <p>City:</p>
        <span>{user.address.city}</span>
      </div>
      <div className='row'>
        <p>Company Name:</p>
        <span>{user.company.name}</span>
      </div>
    </div>
  );
};

export default User;
