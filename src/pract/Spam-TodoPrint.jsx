import React from 'react'
import "../App.css"
import TodoCreate from './Spam-TodoCreate';





const TodoPrint = ({items,setitems,comArr,incom}) =>


{

     //delete todo

    const  deleteIt = (e,id) =>
    {
           
        setitems(items.filter( i => i.id !== id));
        e.preventDefault();
       
    }
//strike

const Completed = (e,id) =>
    {
       
    

        setitems(items.map( i => {

            if(i.id === id)
            {
                
                return {

                    ...i, Done : !i.Done, 
                };
                
                
            }
            return (i);
           
            
        },
       
        )
        );

        // { setitems(items.filter(item => item.Done === true))}

       
        // const array = items.filter( i => i.Done === true);
        //     setitems(array);
        
        

      

       
 
        // const taskId = items.findIndex(i => i.id == id);

        // const NewArray = [...items];
      

        // NewArray[taskId] ={ ...NewArray[taskId], Done : true
        // };

        // setitems(NewArray);
        // console.log(NewArray);
        e.preventDefault();

 
    }


 
    return  (
        <div >
          
            
{/* 
{ items !== [] ?
          
          <div >

           { items.map( i => <div className = "TodoItemBlock"  key = {i.id}> 
         
            
             <span className = {i.Done? "complete" : "text"}>{i.text}  </span>
             <button className ="done todoBlock" onClick= {e => Completed(e, i.id)} >Done</button>
             <button className = "delete" onClick = {e => deleteIt(e,i.id)} >Delete</button>
           
           
           </div> ) }

         
           
          
         </div>
          : null } */}
           <div className = "incomplete">
          
            

          { items !== [] ?
                    
                    <div >
          
                     { items.map( i => <div className = "TodoItemBlock"  key = {i.id}> 
                   
                  
                       <span className = {i.Done? "complete" : "text"}>{i.text}  </span>
                       <button className ="done todoBlock"  onClick= {e => Completed(e, i.id)} >comp</button>
                       <button className = "delete" onClick = {e => deleteIt(e,i.id)} >Delete</button>
                     
                     
                     </div> ) }
          
                   
                     
                    
                   </div>
                    : null }
          
          
          
                 </div>

          <div className = "complete">
          
            

            { comArr !== [] ?
                      
                      <div >
            
                       { comArr.map( i => <div className = "TodoItemBlock"  key = {i.id}> 
                     
                    
                         <span className = {i.Done? "complete" : "text"}>{i.text}  </span>
                         <button className ="done todoBlock" onClick= {e => Completed(e, i.id)} >Done</button>
                         <button className = "delete" onClick = {e => deleteIt(e,i.id)} >Delete</button>
                       
                       
                       </div> ) }
            
                     
                       
                      
                     </div>
                      : null }
            
            
            
                   </div>



       </div>
  
    );
  

}

// const [striked, setstriked] = useState("");


//     return (


//     // { items!== [] ?
          
//         <div>
           

//          { items.map( (i ) => <div className = "TodoItemBlock"  key = {i.id}> 
           
          
//            {i.text}  
//            <button className = "done" >Completed</button>
//            <button className = "delete">Delete</button>


//          </div> ) }

       
         
        
//        </div>
//         // : null }

// );
//     }

    

export default TodoPrint
