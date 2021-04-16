import React from 'react';

export const ToDoItem = ({todo, onDelete}) => {
  return (
    <>
    <div className="my-3 px-4">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  );
}