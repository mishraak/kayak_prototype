import React,{Component} from 'react';
//import {Link} from 'react-router';
//import FlightDash from './FlightDash';
//import HotelsDash from './HotelsDash'

class MainDashBoard extends Component
{
    changeDash(type){
       
        this.props.dashboard(type);
    }
    render(){

    return(
            <div> 
                 <div style={{"marginLeft":"450px"}}>
               <nav className="navbar dock" style={{"textShadow":"none","fontSize":"13px","color":"white"}}>
               <div className="container-fluid" style={{"backgroundColor":"none"}}>
               
                 <ul className="nav navbar-nav j" style={{"backgroundColor":"none"}}>
                   <li className="smallMenu" onClick={this.changeDash.bind(this,"flight")} >
                        <div className="listunit" style={{"display":"flex", "flexDirection":"row"}}>     
                                <div className="icon" style={{"height":"30px","width":"30px"}}>
                                        <img src={require("../images/flight.png")} alt="Flights" style={{"height":"20px","width":"30px"}}/>
                                </div> 
                                <a href="#" className="menuBlock">
                                    Flights</a>
                        </div>
                    </li>
                    
                   <li className="smallMenu" onClick={this.changeDash.bind(this,"hotels")}>
                   <div className="listunit" style={{"display":"flex", "flexDirection":"row"}}>     
                                <div className="icon" style={{"height":"30px","width":"30px"}}>
                                        <img src={require("../images/hotels.png")} alt="Hotels" style={{"height":"25px","width":"30px"}} />
                                </div>
                                <a href="#" className="menuBlock" >Hotels</a>
                   </div>
                   </li>
                   <li  className="smallMenu" onClick={this.changeDash.bind(this,"cars")}>
                   <div className="listunit" style={{"display":"flex", "flexDirection":"row"}}>     
                                <div className="icon" style={{"height":"30px","width":"30px"}}>
                                        <img src={require("../images/cars.png")} alt="Cars"  style={{"height":"20px","width":"30px"}}/>
                                </div> 
                       <a href="#" className="menuBlock">Cars</a>
                   </div>
                   </li>
                 </ul>
               </div>

             </nav>
             </div>
            </div> 
        )
    }
    


};
export default  MainDashBoard;