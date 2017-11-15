import React, { Component } from 'react';
import {Link} from 'react-router';

//import styles from './app.css';

class Nav extends Component {
    render(){
    
    return(
            <div>
                 
                 <nav className="navbar" style={{"textShadow":"none","fontSize":"13px","color":"white"}}>
                 <div className="container-fluid" style={{"backgroundColor":"none"}}>
                   <div className="navbar-header">
                   <img src={require("../images/logo.png")} style={{"marginTop":"10px"}}/>
                   </div>
                   <ul className="nav navbar-nav" style={{"backgroundColor":"none"}}>
                     <li className="active"><a href="#" style={{"color":"white"}}>Flights</a></li>
                     <li ><a href="#" style={{"color":"white"}}>Hotels</a></li>
                     <li  className="nav-item" ><a href="#" style={{"color":"white"}}>Cars</a></li>
                   </ul>
                 </div>
               </nav>
               
             <hr style={{"opacity":"100%","width":"1000px"}}/>
             </div>
        )
    }
    


};
export default  Nav;