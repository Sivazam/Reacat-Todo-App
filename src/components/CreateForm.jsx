import React, { useRef, useEffect} from "react"
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

function Mainpage({input, setinput, items, setitems, setCheck})
{
    const autocursor = useRef(null);
    useEffect(() => autocursor.current.focus() );
    
    function handleChange(event)
    {
        setinput(event.target.value)
    }
    
    function categoryCheck(e)
    { 
        setCheck(e.target.value);
    }

    function submitButton(e)
    {
        e.preventDefault();
        // Match for spaces in the input string
        let isValidInput = input.match(/[0-9a-zA-Z]+/) === null ? false : true;
        if(isValidInput){
            setitems([ {
                id: Math.round(Math.random() * 1000000),
                text: input,
                completed: false
            }, ...items]);
        setinput("");
        }
    }

    return(
        <span>
            <div>  
                <form className = "inputForm" >
                    <input className = "input" type= "text" onChange ={handleChange} name = "input" autoComplete = "off" value={input} placeholder = "Add your Todo item here "  ref= {autocursor} />
                    <button onClick = {e => submitButton(e)} className = "formbutton" > <i className = "fas fa-plus-square"> </i> </button>
                    <span className = "choice" >
                        <select  className ="category" onChange = {categoryCheck}>
                            <option value ="All">All</option>
                            <option value ="Done">Done</option>
                            <option value ="Undone">Undone</option>
                        </select>
                    </span>
                </form>
            </div>
        </span>
    );
}

export default Mainpage