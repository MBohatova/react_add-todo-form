import { TodoInfo } from '../TodoInfo';

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

interface TodoListProps {
  todos: ToDo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map((toDo: ToDo) => (
        <TodoInfo key={toDo.id} toDo={toDo} />
      ))}
    </section>
  );
};
