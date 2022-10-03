import { useState } from "react";

const Grid = (props) => {

    

    const timeGenerate=(i)=>{
        switch (i){
            case '2': return <p id="time">9:30-10:30am</p>
            case '3':  return <p id="time">10:30-11:30am</p>
            case '4': return <p id="time">11:30-12:30pm</p>
            case '5': return <p id="time">12:30-1:30pm</p>
            case '6': return <p id="time">1:30-2:30pm</p>
            case '7': return <p id="time">2:30-3:30pm</p>
            case '8': return <p id="time">93:30-4:30pm</p>
            case '9':return <p id="time">4:30-5:30pm</p>
            case '10':return <p id="time">5:30-6:30pm</p>
            case '11':return <p id="time">6:30-7:30pm</p>
            case '12':return <p id="time">7:30-8:30pm</p>
        }
    }
    
    const deleteHandle=(e)=>{
        
    
      }
    // const input=(str)=>{


    //    for(let i=0;i<props.info.length;i++){
    

    //     if(props.info[i][0][0]===str && props.info[i][0][1]===props.n)
    //     return <div className={"information"}><p className="pinfo">{props.info[i][1]}</p>{timeGenerate(props.n)}</div> 

    //    }
    
    
    // }
    const input=(str)=>{


       for(let i=0;i<props.notesObj.length;i++){
    
        let l=props.notesObj[i][0][0]
        if(l==='sun')
        document.getElementsByClassName(l)[0].style.display='block';
        if(l==='mon')
        document.getElementsByClassName(l)[0].style.display='block';
        if(l==='tue')
        document.getElementsByClassName(l)[0].style.display='block';
        if(l==='wed')
        document.getElementsByClassName(l)[0].style.display='block';
        if(l==='thu')
        document.getElementsByClassName(l)[0].style.display='block';
        if(l==='fri')
        document.getElementsByClassName(l)[0].style.display='block';
        if(l==='sat')
        document.getElementsByClassName(l)[0].style.display='block';
            

        if(props.notesObj[i][0][0]===str && props.notesObj[i][0][1]===props.n)
        return <div className={"information "+str+"p"} id={str+props.n}><p className="pinfo">{props.notesObj[i][1]}</p>{timeGenerate(props.n)} <button  
        onClick={()=>{
          // console.log(props.notesObj[i][0][0]===str ,props.notesObj[i][0][1]===props.n )+
          let idx;
          for(let i=0 ; i<props.notesObj.length;i++){
            if(props.notesObj[i][0][0]===str && props.notesObj[i][0][1]===props.n){
              idx=i;
              break;
            }
          }
            
            console.log(idx,str+'p')
            props.notesObj.splice(idx,1)
            localStorage.setItem('localNotes' , JSON.stringify(props.notesObj))
            console.log(str+props.n)
            document.getElementById(str+props.n).style.display='none';

            let check=0;
            
            for(let i=0;i<props.notesObj.length;i++){
              let l=props.notesObj[i][0][0]
              if(l===str)
              {
                check=1;
              }
            }
          if(!check){
            document.getElementsByClassName(str)[0].style.display='none';
          }
            
        }}
        tooltip="Delete" className={"delete "} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16" >
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
      </svg><span className="tooltiptext">Delete</span></button></div>
        
        

       }
       
    
    
    }

    return ( 
        <>
        <div className={"grid-item sun"+props.n}>{input('sun')}</div>
        <div className={"grid-item mon"+props.n}>{input('mon')}</div>
        <div className={"grid-item tue"+props.n}>{input('tue')}</div>
        <div className={"grid-item wed"+props.n}>{input('wed')}</div>
        <div className={"grid-item thu"+props.n}>{input('thu')}</div>
        <div className={"grid-item fri"+props.n}>{input('fri')}</div>
        <div className={"grid-item sat"+props.n}>{input('sat')}</div>
        </>
     );
}
 
export default Grid;