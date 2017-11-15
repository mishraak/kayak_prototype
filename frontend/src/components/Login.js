import React, { Component } from 'react';
import Nav from './Nav'
import MainDashBoard from './MainDashBoard'
import FlightsDash from './FlightsDash'
import CarsDash from './CarsDash'
import HotelsDash from './HotelsDash'
class Login extends Component {

    

 handleDashBoard(dash){

        this.props.updateDash(dash);
  
 }
  render() {
    return (
     
        <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>
                     <div style={{"zIndex":"10","left":"0"}}>
                        <img src={require("../images/phoenix.jpg")}/>
                    </div>
                   
                    
                        <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}> 
                       <div style={{"marginLeft":"200px"}}>
                        <Nav  />
                       </div>
                        <div  style={{"marginLeft":"50px","color":"white","fontSize":"28px","fontWeight":"600","fontFamily":"HelveticaNeue-Bold,Helvetica,Arial,sans-serif","marginLeft":"200px"}}>
                            Search hundreds of travel sites at once.
                         </div>
                         <div style={{"marginLeft":"230px"}}>
                             <form ref="loginForm" onSubmit={this.handleSubmit}>
                                    <input type="email" ref="email" placeholder="Email" style={{"height":"30px","width":"270px","margin":"10px"}}/>
                                    <input type="password" ref ="password" placeholder="Password" style={{"height":"30px","width":"270px","margin":"10px"}}/>
                                    <input type="submit" value="login" style={{"height":"30px","width":"270px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}/>
                            </form>
                        </div>
                        
                        <MainDashBoard dashboard={this.handleDashBoard.bind(this)}/>
                     
                  
                         <div style={{"display":(this.props.dash[0].flights)? "block":"none" }}>
                        <FlightsDash />
                        </div>
                        <div style={{"display":(this.props.dash[0].cars)? "block":"none"}}>
                        <CarsDash/>
                        </div>
                        <div style={{"display":(this.props.dash[0].hotels)? "block":"none"}}>
                        <HotelsDash/>
                        </div>
       
      </div>
      </div>
    );
  }
}

export default Login;
