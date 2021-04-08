import React from 'react'
import TaskBlock from "./TaskBlock"

function List({items, setitems, Split}) {
    return (
        <div className ="MainContainer">
            <div className = "taskList">
               { Split.map((item) => <TaskBlock  items = {items} setitems ={setitems} item ={item} text ={item.text} key = {item.id} />)}
                
            </div>
            
        </div>
    )
}

export default List
