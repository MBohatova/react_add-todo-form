import React from 'react';

interface ToDoUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserInfoProps {
  toDoUser: ToDoUser | null;
}

export const UserInfo: React.FC<UserInfoProps> = ({ toDoUser }) => {
  if (!toDoUser) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${toDoUser.email}`}>
      {toDoUser.name}
    </a>
  );
};
