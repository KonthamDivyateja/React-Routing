import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/todos')}>Back to Todos</button>
      <h2>Todo Details</h2>
      <p><strong>Todo ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
};

export default TodoDetails;
