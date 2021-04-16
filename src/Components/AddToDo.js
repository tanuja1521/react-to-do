import React, { useState } from 'react';

export const AddToDo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const submit = (e) =>{
      e.preventDefault()
      if(!title || !desc){
        alert("Title or Description cannot be blank")
      }
      else {
        props.addToDo(title,desc);
        setTitle("");
        setDesc("");
      }
  }
  return (
    <div className="container my-3 py-3 px-3 bg-secondary text-light ">
      <h3 className="text-center">Add a ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">ToDo Title</label>
          <input type="text" value={title} onChange ={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">ToDo Description</label>
          <input type="text" value={desc} onChange ={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-sm btn-dark">Add ToDo</button>
      </form>
    </div>
  );
}