import React from "react";
import { ToDoItem } from "./ToDoItem";

export default function ToDos(props) {
  let containerStyle = {
    minHeight: "46vh",
    paddingLeft: "10%",
    paddingRight: "10%"
  };
  return (
    <div className="container my-3" style={containerStyle}>
      <h3 className="text-center my-3">To Do List</h3>
      <hr />
      {props.todos.length === 0 ? (
        <h4>No Todos to display</h4>
      ) : (
        props.todos.map((todo) => {
          return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

        })
      )}
    </div>
  );
}
