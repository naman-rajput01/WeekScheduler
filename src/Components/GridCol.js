// import { useEffect, useState } from "react";
import Grid from "./grig";

const GridCol = (props) => {
    
//   const[notesObj , setNotesObj]=useState([]);
//     const arr=localStorage.getItem('localNotes');
//     if(arr==null){
//         setNotesObj([])
//     }
//     else{
//         setNotesObj(JSON.parse(arr))
//     }
  
    
        
       


    return ( 
        <div className="event">
          <Grid n='1'   info={props.info} notesObj={props.notesObj} />
           <Grid n='2'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='3'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='4'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='5'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='6'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='7'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='8'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='9'  info={props.info} notesObj={props.notesObj}  />
           <Grid n='10' info={props.info} notesObj={props.notesObj} />
           <Grid n='11' info={props.info} notesObj={props.notesObj} />
           <Grid n='12' info={props.info} notesObj={props.notesObj} />
          
    
        </div>
     );
}
 
export default GridCol;