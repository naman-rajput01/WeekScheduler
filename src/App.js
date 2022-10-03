import Calender from "./Components/Calendar";

import Sidebar from "./Components/Sidebar";
import {useEffect ,useState} from 'react'

function App() {

  // const [notesObj,setNotesObj]=useState([]);
  // useEffect(()=>{
  
  // let arr=localStorage.getItem('note')
  //  setNotesObj(JSON.parse(arr))
   
  // },[])
  // console.log(notesObj)
  const[notesObj , setNotesObj]=useState([]);
  const arr=localStorage.getItem('localNotes');
  
  useEffect(()=>{
    // const[notesObj , setNotesObj]=useState([]);
    // const arr=localStorage.getItem('localNotes');
    // console.log(notesObj)
    if(arr==null){
      setNotesObj([])
    }
    else
    setNotesObj(JSON.parse(arr))

  },[]
  )


  const handleLocalSubmit=(e)=>{
      e.preventDefault()
      // console.log('hii')
      const i=e.target[1].value
      const j=e.target[2].value
      const information=[[i,j],note]
      if(!note){

      }
      else{
        
        let check=1
        for(let k=0;k<notesObj.length;k++){
          // console.log(notesObj[k][0][0],i)
          if(notesObj[k][0][0]===i && notesObj[k][0][1]===j){
            check=0;
            break

          }
        }
        if(check){
          notesObj.push(information)
          localStorage.setItem('localNotes',JSON.stringify(notesObj))
        }
        else
        alert("An event already exists there")
      }
      setNote('')
      e.target[1].value='sun'
      e.target[2].value=2
      // setNotesObj([])


  }

  const [info , setInfo]=useState([]);
  const [note,setNote]=useState('')
  
  const handleChange=(e)=>{
    setNote(e.target.value)
    // console.log(note)
  }

  const handleClick=e=>{
    e.preventDefault();
    const i=e.target[1].value
    const j=e.target[2].value
    
    const information=[[i,j],note];
   
    if(!note){

    }
    else{
    let check=1;
   
    
    for(let k=0;k<info.length;k++){
    
        if(info[k][0][0]===i && info[k][0][1]===j){
            check=0;
            break;
        }
    }
    if(check){
    setInfo([...info,information])
    
    }
    else{
        alert('An event already exists there');
    }
}
    setNote('')
    e.target[1].value='sun'
    e.target[2].value=2
    

}


  return (
    <div className="container">
     <Sidebar handleSubmit={handleClick} handleChange={handleChange} handleLocalSubmit={handleLocalSubmit} note={note}/>
    <Calender info={info} notesObj={notesObj} />
    </div>
  );
}

export default App;
