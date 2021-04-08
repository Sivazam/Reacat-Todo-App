import React, {useEffect, useState} from 'react'
import TodoCreate  from './Spam-TodoCreate';
import TodoPrint from './Spam-TodoPrint';




function Todoitem({catChecks}) {

    const [items, setitems] = useState([]);
    const [comArr,setcomArr] =useState([]);
    const [incom, setincom] =useState([]);
    const [filter,setfilter] = useState("");

    function Handlefilter()
{
    switch(catChecks){
    case "Undone" : setfilter(items.filter(item => item.Done === false));
    break;
    case "Done": setfilter(items.filter(item => item.Done === true));
    break;
    default: setfilter(items);
    break;
    }
}
   



    // let uncheckedItems = [];
    // let [checkedItems, setCheckedItems] = useState([]); 
    // let [checkedIds, setCheckedIds] = useState([]);
    
    // useEffect(() => {

    // comp();

    // },[items]);

  function comp(){

    

    setincom(items.filter(item => item.Done === false));
     

    let asd = items.filter(item => item.Done === true);
    console.log(...asd);


   
  
    

 
    setcomArr(asd);

    
    // setFarr(mainArray)
    
  
    
   
    //
    // checkedItems.map((checkedItem) => {
    //     checkedIds.push(checkedItem.id);    
    // });

    // setCheckedIds(checkedIds);

    // Rearray.map((i) => {
    //     if(checkedIds.indexOf(i.id) != -1){
    //         checkedItems.push(i);
    //     }
    // })

    // setCheckedItems(checkedItems);
    

    // let Farray = items.filter( i => i.Done === false);
    

    // let Rearray = items.filter( i => i.Done === true);


     // const New = [...Farray, ...Rearray];
    //  const New = [...Rearray];

    //  console.log(`[DEBUG] Checked Items: ${checkedItems}`);
    //  console.log(`[DEBUG] Checked Ids: ${checkedIds}`);
    //  setcomArr(New);
//      console.log("Undone:", ...Farray);
//    console.log("Done:", ...Rearray);
    //  setitems(New);


    //  setcomArr(Farray);

     


// const sett = [Rearray];
// console.log(sett);
    //  const Marr = items.filter( i => i.Done !== true);
    //  console.log(Marr);
    // //  setitems(...items, Rearray);




    //  const Narr =[Farray, ...items];
     
    //  setcomArr();
    //  setitems(Farray);
    
    
    
    //  console.log(...items);
    //  const farray = [ ...items];
    // console.log(farray);
    
  }

    function addI(Newitem)
    {
        
        if(!Newitem.text || /^\s*$/.test(Newitem.text)){
            return;
        }

    const upArray = [Newitem,...items];
    // console.log(Newitem);
     setitems(upArray);
   
    }
     
//  const  deleteIt = (e,id) =>
//     {
           
//         setitems(items.filter( i => i.id != id));
//         e.preventDefault();
//     }
    // const Strike = (e,id) =>
    // {
        

    //     const taskId = items.findIndex(i => i.id == id);

    //     const NewArray = [...items];
    //     // console.log(...items);

    //     NewArray[taskId] ={ ...NewArray[taskId], Done : true
    //     };

    //     setcomArr(NewArray);

    //     // console.log(NewArray);

       




    //     e.preventDefault();


    // }

    // const onStrike = (A) =>
    // {
 

    //     A.map(e => {
          
    //           if(e.Done === true ){
    //              console.log(e);
    //           }
               
    //     });
           
              
    //         //  (items.filter( i => i.Done === true));
  
               
    // }

    

    return (
        
        <div className = "header">

            
            <h1>Task Manager</h1>
         
            <TodoCreate PassObj = {addI} items ={items} />
           
            <TodoPrint 
            items = {items}  setitems ={setitems}
            comArr ={comArr}
            setcomArr ={setcomArr}
            incom ={incom}
          
        
           
            
            
            />
           

            </div> );

           

}


           

export default Todoitem

