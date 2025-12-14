import { UserInfo } from '../UserInfo';

interface ToDo {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  } | null;
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

interface TodoInfoProps {
  toDo: ToDo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ toDo }) => {
  if (toDo.completed === true) {
    return (
      <article data-id="1" className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">{toDo.title}</h2>

        <UserInfo toDoUser={toDo.user} />
      </article>
    );
  } else if (toDo.completed === false) {
    return (
      <article data-id="1" className="TodoInfo">
        <h2 className="TodoInfo__title">{toDo.title}</h2>

        <UserInfo toDoUser={toDo.user} />
      </article>
    );
  }
};
