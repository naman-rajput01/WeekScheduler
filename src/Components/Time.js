const Time = () => {

    const a=[];
    let j=9;
    for(let i=0;i<4;i++){
        a[i]=j;
        j++;
    }
    j=1;
    const b=[];
    for(let i=0;i<8;i++){
        b[i]=j;
        j++;
    }

    return ( 
        <div className="time">
            {a.map(i=>(
                    <p key={i} className={'a'+i+' ptime'}>{i}:30 am</p>
                ))}
            {b.map(i=>(
                    <p key={i} className={'p'+i +' ptime'}>{i}:30 pm</p>
                ))}
        
        </div>
     );
}
 
export default Time;