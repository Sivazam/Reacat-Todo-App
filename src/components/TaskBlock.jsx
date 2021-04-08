import React from 'react'

function TaskBlock({items, item, setitems, text}) {

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
           
            
        },
       
        )
        );
    }






    const  deleteIt = (e) =>
    {
        
        setitems(items.filter(i => i.id !== item.id));
        e.preventDefault();
       
    };



    return (
        <div>
            
           <span className =  {item.completed ? "complete" : "block "} >{text}</span>
                       <button className = "CompBtn"onClick ={e => Completed(e)}>comp</button>
                       <button className = "delete"  onClick ={e => deleteIt(e)} >Delete</button>
        </div>
    )
}

export default TaskBlock
