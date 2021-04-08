import React from 'react'


function TaskBlock({items, item, setitems, text, handleCheckbox}) {
    const Completed = (e) =>
    {
        setitems(items.map( i => {
            if(i.id === item.id)
            {
                return {
                    ...i, completed : !i.completed, 
                };
            }
            return i;
        },));

        // TODO: Add to Done List
    }
    
    const  deleteIt = (e) =>
    {     
        setitems(items.filter(i => i.id !== item.id));
        e.preventDefault();
    };

    return (
        <div className = "todoBlock">
            <input className ="checkBox" type="checkbox"   onChange ={() => Completed(item)} checked ={item.comppleted}></input>
            <span className =  {item.completed ? "complete" : "block "} >{text}</span>
            <span className = "buttons">   
                <button className = "delete"  onClick ={e => deleteIt(e)} >Remove</button>
            </span>
        </div>
    )
}

export default TaskBlock
