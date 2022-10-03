import GridCol from "./GridCol";
import Navbar from "./Navbar";
import Time from "./Time";

const Calender = (props) => {
   
    return (    
        <div className="calender">
            
        <Navbar/>
        <div className="circle sun">&#128993;</div>
        <div className="circle mon">&#128993;</div>
        <div className="circle tue">&#128993;</div>
        <div className="circle wed">&#128993;</div>
        <div className="circle thu">&#128993;</div>
        <div className="circle fri">&#128993;</div>
        <div className="circle sat">&#128993;</div>
        <div className="calendercontainer">
            <div className="ddcontainer">
            <div className="daydate">
                
                <div className="day">Sun</div>
                {/* <div className="date">10</div> */}
                
            </div>
            <div className="daydate">
                <div className="day">Mon</div>
                {/* <div className="date">11</div> */}
            </div>
            <div className="daydate">
                <div className="day">Tue</div>
                {/* <div className="date">12</div> */}
            </div>
            <div className="daydate">
                <div className="day">Wed</div>
                {/* <div className="date">13</div> */}
            </div>
            <div className="daydate">
                <div className="day">Thu</div>
                {/* <div className="date">14</div> */}
            </div>
            <div className="daydate">
                <div className="day">Fri</div>
                {/* <div className="date">15</div> */}
            </div>
            <div className="daydate">
                <div className="day">Sat</div>
                {/* <div className="date">16</div> */}
            </div>
            
        </div>
        <hr/>
        <div className="grid-container">
           <Time/>
           <GridCol info={props.info} notesObj={props.notesObj} />

        </div>
        </div>
        </div>
     );
}
 
export default Calender;