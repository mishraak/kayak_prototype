import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Nav'
import MainDashBoard from './MainDashBoard'
import FlightsDash from './FlightsDash'
import CarsDash from './CarsDash'
import HotelsDash from './HotelsDash'
import GetFlights from './GetFlights'
import SignUp from './SignUp'
import About from './About'
import GetCars from './GetCars'
import GetHotels from './GetHotels'
import * as API from '../api/API'

class Login extends Component {

 state={
     SearchCriteria:[],
     isLoggedIn:false
 };

componentWillMount(){
     if(window.localStorage.getItem("username") ){
         this.setState({isLoggedIn:true});
     }
 }

 handleLogout(){
     localStorage.removeItem("username");
     this.setState({isLoggedIn:false});
 }

 handleLogin(credentials){

     API.doLogin(credentials)
         .then((res) => {
             console.log("status",res.status)
             if(res.status===201){
                 this.setState({isLoggedIn:true});
                 localStorage.setItem("username",credentials.email)
             }


         });
 }

handleSignup(payload) {            
        
     API.handleSignup(payload)
            .then(function (response) {
                console.log(response);                                                                                           
            })
            .catch(function (error) {
              console.log(error);              
            })
    
    //this.props.history.push("/"); 

}

/*
handleAbout(payload) {            
        
     API.handleAbout(payload)
            .then(function (response) {
                console.log(response);                                                                                           
            })
            .catch(function (error) {
              console.log(error);              
            })
}    
*/
 handleDashBoard(dash){
     this.props.updateDash(dash);
 }

 getSearchResults(criteria) {

     this.setState({SearchCriteria:criteria});
     this.props.history.push("/GetFlights");
 }

  render() {
    return (
        <div>

                <Route exact path="/" render={() => (
                    <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>
                        <img src={require("../images/phoenix.png")} alt="Login" />
                        <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                            <div style={{"marginLeft":"200px"}}>
                                <Nav isLoggedIn={this.state.isLoggedIn} route={this.props.history.push} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)}/>
                            </div>
                            <div  style={{"color":"white","fontSize":"28px","fontWeight":"600","fontFamily":"HelveticaNeue-Bold,Helvetica,Arial,sans-serif","marginLeft":"10px"}}>
                                Search hundreds of travel sites at once.
                            </div>
                            
                            <MainDashBoard dashboard={this.handleDashBoard.bind(this)}/>
                            <div style={{"display":(this.props.dash[0].flights)? "block":"none" }}>
                                <FlightsDash getSearchResults={this.getSearchResults.bind(this)} />
                            </div>
                            <div style={{"display":(this.props.dash[0].cars)? "block":"none"}}>
                                <CarsDash/>
                            </div>
                            <div style={{"display":(this.props.dash[0].hotels)? "block":"none"}}>
                                <HotelsDash/>
                            </div>

                        </div>
                    </div>
                )}/>

                <Route exact path="/GetFlights" render={() => (
                    <GetFlights isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/GetCars" render={() => (
                    <GetCars isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/GetHotels" render={() => (
                    <GetHotels isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/signup" render={() => (
                    <SignUp route={this.props.history.push} handleSignup={this.handleSignup.bind(this)}/>
                )}/>
                <Route exact path="/about" render={() => (
                    <About route={this.props.history.push}/>
                )}/>
        </div>




    );
  }
}

export default withRouter(Login);
