import React, {useState, useRef, useEffect} from 'react'
import Todoitem from './Spam-Todoitem';

 


function TodoCreate(props) {

const [catChecks, setChecks] =useState("Done");



const autocursor = useRef(null);

useEffect(() => autocursor.current.focus() );

//on change//

function handleChange(event)
{
   
setinput(event.target.value)
}


//form submit//

function submitButton(e)
{
    
    props.PassObj({
        
        
        id: Math.round(Math.random() * 1000000),
        text : input,
        Done: false
        
    });
    
e.preventDefault();
setinput("");

}
function catCheck(event)
{
    setChecks(event.target.value);
}

    return (
        
       <span>
           
        <div>
            
            <form className = "input-form" onSubmit = {submitButton}>
<input className = "input" type= "text" name = "input" autoComplete = "off" onChange ={handleChange}  placeholder = "Enter here" value = {input}  ref= {autocursor}/>
<button className = "formbutton" >+</button>

<span className = "choice" >
    <select onChange ={catCheck} className ="category" >
        <option value ="All">All</option>
        <option value ="Done">Done</option>
        <option value ="Undone">Undone</option>

    </select>
</span>

            </form>
            
        </div>
        </span>
    )
}

export default TodoCreate
