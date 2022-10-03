import { useState } from "react";

const Sidebar = (props) => {

   

  
   

    return ( 
        <div className="sidebar">
            <div className="sidenav">
            <h2>Mark an event</h2>
            </div>
            <div className="sidebarcontainer">
                <form onSubmit={props.handleLocalSubmit} >
                    <div className="infolabel">Event Information</div>
                    <textarea   cols="30" rows="10"  value={props.note} onChange={props.handleChange}></textarea>
                    <div className="selectdate">Select Date</div>
                    <select className="dateselect">
                        <option value="sun">Sun</option>
                        <option value="mon">Mon</option>
                        <option value="tue">Tue</option>
                        <option value="wed">Wed</option>
                        <option value="thu">Thu</option>
                        <option value="fri">Fri</option>
                        <option value="sat">Sat</option>
                    </select>
                    <div className="selecttime">Select Time</div>
                    <select className="timeselect">
                        <option value="2">9:30am-10:30am</option>
                        <option value="3">10:30am-11:30am</option>
                        <option value="4">11:30am-12:30pm</option>
                        <option value="5">12:30pm-1:30pm</option>
                        <option value="6">1:30pm-2:30pm</option>
                        <option value="7">2:30pm-3:30pm</option>
                        <option value="8">3:30pm-4:30pm</option>
                        
                        
                        <option value="9">4:30pm-5:30pm</option>
                        <option value="10">5:30pm-6:30pm</option>
                        <option value="11">6:30pm-7:30pm</option>
                        <option value="12">7:30pm-8:30pm</option>
                        
                    </select>
                    <div>
                        
                    <button className="setEvent">Set Event</button>
                    </div>
                </form>
            </div>
                
        </div>
     );
}
 
export default Sidebar;