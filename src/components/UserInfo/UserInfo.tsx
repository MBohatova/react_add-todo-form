import React from 'react';
import { User } from '../types';

// interface ToDoUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }

interface UserInfoProps {
  toDoUser: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ toDoUser }) => {
  return (
    <a className="UserInfo" href={`mailto:${toDoUser.email}`}>
      {toDoUser.name}
    </a>
  );
};
