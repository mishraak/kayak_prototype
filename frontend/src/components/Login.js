import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Nav'
import MainDashBoard from './MainDashBoard'
import FlightsDash from './FlightsDash'
import CarsDash from './CarsDash'
import HotelsDash from './HotelsDash'
import GetFlights from './GetFlights'
<<<<<<< HEAD
import GetCars from './GetCars'
import GetHotels from './GetHotels'
=======
import SignUp from './SignUp'
>>>>>>> master
import * as API from '../api/API'

class Login extends Component {

 state={
     SearchCriteria:[],
     isLoggedIn:false
 };

<<<<<<< HEAD

 componentWillMount(){
     if(window.localStorage.getItem("username") ){
         this.setState({isLoggedIn:true});
     }
 }

=======
>>>>>>> master
 handleLogin(credentials){

     API.doLogin(credentials)
         .then((res) => {
<<<<<<< HEAD
             console.log("status",res.status);
=======
             console.log("status",res.status)
>>>>>>> master
             if(res.status===201){
                 this.setState({isLoggedIn:true});
                 localStorage.setItem("username",credentials.email)
             }


         });
 }

<<<<<<< HEAD
 handleLogout(){
     localStorage.removeItem("username");
     this.setState({isLoggedIn:false});
 }
=======
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
>>>>>>> master

 handleDashBoard(dash){
     this.props.updateDash(dash);
 }
<<<<<<< HEAD

 getSearchResults(criteria) {

     this.setState({SearchCriteria:criteria});
     //alert("abc");
     //var searchType=this.state.SearchCriteria.searchType;
     if(criteria.searchType==="Flights"){
         this.props.history.push("/GetFlights");
     }
     else if(criteria.searchType==="Cars"){
         alert("no ");
         this.props.history.push("/GetCars");
     }
     else if(criteria.searchType==="Hotels"){
         this.props.history.push("/GetHotels");
     }

=======

 getSearchResults(criteria) {

     this.setState({SearchCriteria:criteria});
     this.props.history.push("/GetFlights");
>>>>>>> master
 }

  render() {
    return (
        <div>

<<<<<<< HEAD
            <Route exact path="/" render={() => (
                    <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>
                        <img src={require("../images/phoenix.png")}/>
                        <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                            <div style={{"marginLeft":"200px"}}>
                                <Nav  isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)}/>
                            </div>
                            <div  style={{"marginLeft":"50px","color":"white","fontSize":"28px","fontWeight":"600","fontFamily":"HelveticaNeue-Bold,Helvetica,Arial,sans-serif","marginLeft":"200px"}}>
                                Search hundreds of travel sites at once.
                            </div>


                            <MainDashBoard dashboard={this.handleDashBoard.bind(this)}/>


=======
                <Route exact path="/" render={() => (
                    <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>
                        <img src={require("../images/phoenix.png")} alt="Login" />
                        <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                            <div style={{"marginLeft":"200px"}}>
                                <Nav isLoggedIn={this.state.isLoggedIn} route={this.props.history.push} handleLogin={this.handleLogin.bind(this)}/>
                            </div>
                            <div  style={{"color":"white","fontSize":"28px","fontWeight":"600","fontFamily":"HelveticaNeue-Bold,Helvetica,Arial,sans-serif","marginLeft":"10px"}}>
                                Search hundreds of travel sites at once.
                            </div>
                            
                            <MainDashBoard dashboard={this.handleDashBoard.bind(this)}/>
>>>>>>> master
                            <div style={{"display":(this.props.dash[0].flights)? "block":"none" }}>
                                <FlightsDash getSearchResults={this.getSearchResults.bind(this)} />
                            </div>
                            <div style={{"display":(this.props.dash[0].cars)? "block":"none"}}>
<<<<<<< HEAD
                                <CarsDash getSearchResults={this.getSearchResults.bind(this)}/>
                            </div>
                            <div style={{"display":(this.props.dash[0].hotels)? "block":"none"}}>
                                <HotelsDash getSearchResults={this.getSearchResults.bind(this)}/>
=======
                                <CarsDash/>
                            </div>
                            <div style={{"display":(this.props.dash[0].hotels)? "block":"none"}}>
                                <HotelsDash/>
>>>>>>> master
                            </div>

                        </div>
                    </div>
<<<<<<< HEAD
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
=======
                )}/>

                <Route exact path="/GetFlights" render={() => (
                    <GetFlights isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/signup" render={() => (
                    <SignUp route={this.props.history.push} handleSignup={this.handleSignup.bind(this)}/>
                )}/>
>>>>>>> master
        </div>




    );
  }
}

export default withRouter(Login);
