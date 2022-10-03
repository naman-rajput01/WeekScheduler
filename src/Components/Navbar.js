

const Navbar = () => {
        const a=[];
        for(let i=1;i<=52;i++){
           a[i-1]=i;
        }
    
    return ( 
        <div className="navbar">
            {/* <h2>Timeline</h2>
            <div className="nav">
            <select>
                <option  value="Week" > Week</option>
                {a.map(i=>(
                    <option key={i} value={i}>Week {i}</option>
                ))}
            </select>
            <h3 >10-16 December,2019</h3>
            <button className="buttonl" >{`<`}</button>
            <button className="buttonr">{`>`}</button> */}
            <h2>Schedule your week</h2>
            </div>
        // </div>
     );
}
 
export default Navbar;