import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Work from './MyComponents/Work';
import AddTask from './MyComponents/AddTask';
import React,{ useState ,useEffect} from 'react';
import About from './MyComponents/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete=(todo)=>{
    console.log("i am deleted",todo);

    setWork(work.filter((e)=>{
      return e!==todo;
    }));

  }

  const addTodo=(title,desc)=>{
    console.log("i am adding work",title,desc)
    let sno = work.length > 0 ? work[work.length - 1].sno + 1 : 1;
    const myTodo=
    {
      sno:sno,
      title:title,
      desc:desc,

    }
    setWork([...work,myTodo])
    console.log(myTodo)

  }

  const [work, setWork] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(work));
 
  },[work])

  

  return (
    <>
    <Router>
    <Header title="Home" searchBar={true}/>
    <Routes>
    <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <>
              <AddTask addTodo={addTodo} />
              <Work work={work} onDelete={onDelete} />
            </>
          }
        />
        </Routes>

    <Footer/>
    </Router>
    </>
  );
}

export default App;
