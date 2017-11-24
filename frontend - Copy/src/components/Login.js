import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Nav'
import MainDashBoard from './MainDashBoard'
import FlightsDash from './FlightsDash'
import CarsDash from './CarsDash'
import HotelsDash from './HotelsDash'
import GetFlights from './GetFlights'
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

 handleLogin(credentials){

     API.doLogin(credentials)
         .then((res) => {
             console.log("status",res.status);
             if(res.status===201){
                 this.setState({isLoggedIn:true});
                 localStorage.setItem("username",credentials.email)
             }


         });
 }

 handleLogout(){
     localStorage.removeItem("username");
     this.setState({isLoggedIn:false});
 }

 handleDashBoard(dash){
     this.props.updateDash(dash);
 }

 getSearchResults(criteria) {

     this.setState({SearchCriteria:criteria});
     //alert("abc");
     //var searchType=this.state.SearchCriteria.searchType;
     if(criteria.searchType==="Flights"){
         this.props.history.push("/GetFlights");
     }
     else if(criteria.searchType==="Cars"){
         this.props.history.push("/GetCars");
     }
     else if(criteria.searchType==="Hotels"){
         this.props.history.push("/GetHotels");
     }

 }

  render() {
    return (
        <div>

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


                            <div style={{"display":(this.props.dash[0].flights)? "block":"none" }}>
                                <FlightsDash getSearchResults={this.getSearchResults.bind(this)} />
                            </div>
                            <div style={{"display":(this.props.dash[0].cars)? "block":"none"}}>
                                <CarsDash getSearchResults={this.getSearchResults.bind(this)}/>
                            </div>
                            <div style={{"display":(this.props.dash[0].hotels)? "block":"none"}}>
                                <HotelsDash getSearchResults={this.getSearchResults.bind(this)}/>
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
        </div>




    );
  }
}

export default withRouter(Login);
