import "./App.css";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import ToDos from "./Components/ToDos";
import React, { useEffect, useState } from 'react';
import { AddToDo } from "./Components/AddToDo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { About } from "./Components/About";

export default function App() {
  let initToDo;
  if(localStorage.getItem("todos")===null){
    initToDo = [];
  }
  else{
    initToDo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    //console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addToDo = (title,desc) => {
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else sno = todos[todos.length-1].sno + 1;
    const newToDo = {
      title: title,
      desc: desc,
      sno: sno
    }
    setTodos([...todos, newToDo]);
    //console.log(newToDo);  
  }
 

  const [todos, setTodos] = useState(initToDo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div>
    <Router>
      <Header title="To Do List" searchBar={false} />
      <Switch>
        <Route exact path="/" render={()=>{
            return(
              <>
                <AddToDo addToDo={addToDo}/>
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            );
        }}>
                  
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>      
      <Footer />
    </Router>
    </div>
  );
}
