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
    // if(!input || /^\s*$/.test(input))
    // {
    //     return;
    // }
    
   setitems([ {
       id: Math.round(Math.random() * 1000000),
       text: input,
       completed: false
   }, ...items]);
    e.preventDefault();
setinput("");

}

    
return(
    <span>
           
    <div>
        
        <form className = "inputForm" >
<input className = "input" type= "text" onChange ={handleChange} name = "input" autoComplete = "off" value={input} placeholder = "Enter here"  ref= {autocursor} formNoValidate/>
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