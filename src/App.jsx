import React,{useState,useEffect} from "react";
import './App.css';
import Mainpage from "./components/CreateForm"
import List from "./components/List";





function App() {

  const [input,setinput] = useState("");
  const [items, setitems] = useState([]);
  const [Check,setCheck]=useState("All");
  const [Split,setSplit]=useState([]);


 useEffect(() => {

  Splitfun();

    },[items, Check]);


  function Splitfun()
  {
    switch (Check) {
      case "Undone" :   setSplit(items.filter(item => item.completed === false));
    
      break;
      case "Done": setSplit(items.filter(item => item.completed === true));
      break;
      default: let UndoneArr = items.filter(item => item.completed === false);
      let DoneArr = items.filter(item => item.completed === true) ; setSplit([...UndoneArr,...DoneArr]);
      break;
      }
  };
  return (
    
    
    
    <div className="MainContainer">
      <div className = "list"> 
      <h1>Task bot </h1>
   <Mainpage  setCheck={setCheck} input ={input} setinput ={setinput} items ={items} setitems = {setitems}/>

 <List Split = {Split} items = {items} setitems ={setitems}/>
 
   </div>
    </div>
  );
}

export default App;
