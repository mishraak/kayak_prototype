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
import AddFlight from './AddFlight'
import AddHotel from './AddHotel'
import AddCar from './AddCar'
import * as API from '../api/API'
import MyBookings from './MyBookings'
import AdminProfile from './AdminProfile'
import Analytics from './Analytics'
import SearchFlight from "./SearchFlight";
import SearchCar from "./SearchCar";
import SearchHotel from "./SearchHotel";
import ModifyAccount from "./ModifyAccount";
import FetchBills from "./FetchBills";
import ReactiveGrid from "./ReactiveGrid";


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
componentDidMount(){
        this.totalTime=(new Date).getTime();
        //API.log({page:"HomePage"});
    }
componentWillUnmount(){
        var node= {
            username: localStorage.getItem("username"),
            data: {
                pageName: "HomePage",
                timeSpent: ((new Date).getTime()-this.totalTime)/1000
            },
            next: null
        };

        if(!localStorage.getItem("trackUser")){
            localStorage.setItem("trackUser",JSON.stringify(node));
        }
        else{
            var linkedList=JSON.parse(localStorage.getItem("trackUser"));
            var curr=linkedList;
            while(curr.next!==null){
                curr=curr.next;
            }
            curr.next=node;
            localStorage.setItem("trackUser",JSON.stringify(linkedList));
        }

}

handleAddFlight(payload) {            
        
     API.handleAddFlight(payload)
            .then(function (response) {
                console.log(response);                                                                                       
            })
            .catch(function (error) {
              console.log(error);              
            })
    
    //this.props.history.push("/"); 
}

handleAdminProfile() {                  
  this.props.history.push("/AdminProfile");
}

handleAddHotel(payload) {            
        
     API.handleAddHotel(payload)
        .then(function (response) {
            console.log(response);                                                                                           
        })
        .catch(function (error) {
          console.log(error);              
        })
}


handleAddCar(payload) {            
        
     API.handleAddCar(payload)
        .then(function (response) {
            console.log(response);                                                                                           
        })
        .catch(function (error) {
          console.log(error);              
        })
} 

 handleLogout(){
     localStorage.removeItem("username");
     localStorage.removeItem("user_status");
     this.setState({isLoggedIn:false});
     this.props.history.push("/");

 }

 handleLogin(credentials){

     API.doLogin(credentials)
         .then((res) => {
             console.log("status",res.status);
             if(res.status===201){
                console.log("username" + res.data.email);                
                 this.setState({isLoggedIn:true});
                 localStorage.setItem("username",res.data.email);
                 localStorage.setItem("user_status",res.data.user_status);                 
             }


         });
 }

handleSignup(payload) {
    var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    try {

        if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(payload.zip_code) && /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(payload.email) && states.indexOf(payload.state) > -1) {
            //alert(true);
            console.log("well formed state..calling api....");
            API.handleSignup(payload)
                .then(function (response) {
                    console.log(response.data);
                    if(response.data==="duplicate user"){
                        alert("user already exists");
                    }
                    else{
                        alert("signup successful");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else {
            //alert(false)
            alert("not valid");
        }
    }
    catch(err){
        console.log("Exception caught",err);
    }
        

    
    //this.props.history.push("/"); 

}

 handleDashBoard(dash){
     this.props.updateDash(dash);
 }
 getSearchResults(criteria) {

        this.setState({SearchCriteria:criteria});
        //alert("abc");
        //var searchType=this.state.SearchCriteria.searchType;
        if(this.validate(criteria)){
            if(criteria.searchType==="Flights"){
                this.props.history.push("/GetFlights");
            }
            else if(criteria.searchType==="Cars"){
                //alert("no ");
                this.props.history.push("/GetCars");
            }
            else if(criteria.searchType==="Hotels"){
                this.props.history.push("/GetHotels");
            }
        }

    }

    validate(criteria){
        if(criteria.searchType==="Flights"){
            if(criteria.origin===''){
                alert("Source cannot be blank");
                return false;
            }
            if(criteria.destination===''){
                alert("Destination cannot be blank");
                return false;
            }
            if(new Date(criteria.fromDate)>new Date(criteria.toDate)){
                alert("Arrival date cannot be before departure date");
                return false;
            }
            var today = new Date(Date.now());
            today.toISOString().substring(0, 10);
            if(new Date(criteria.fromDate+" 23:59:59")<new Date(today)){
                alert("you cannot book for past");
                return false;
            }
            return true;
        }
        else if(criteria.searchType==="Cars"){
            //alert("no ");
            this.props.history.push("/GetCars");
        }
        else if(criteria.searchType==="Hotels"){
            this.props.history.push("/GetHotels");
        }

    }

  render() {
    return (
        <div>

                <Route exact path="/"  render={() => (
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
                                <CarsDash getSearchResults={this.getSearchResults.bind(this)} />
                            </div>
                            <div style={{"display":(this.props.dash[0].hotels)? "block":"none"}}>
                                <HotelsDash getSearchResults={this.getSearchResults.bind(this)}/>
                            </div>

                        </div>
                    </div>
                )}/>

                <Route exact path="/GetFlights" render={() => (
                    <GetFlights route={this.props.history.push} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/GetCars" render={() => (
                    <GetCars route={this.props.history.push} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/GetHotels" render={() => (
                    <GetHotels route={this.props.history.push} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout.bind(this)} handleLogin={this.handleLogin.bind(this)} searchCriteria={this.state.SearchCriteria}/>
                )}/>
                <Route exact path="/signup" render={() => (
                    <SignUp route={this.props.history.push} handleSignup={this.handleSignup.bind(this)}/>
                )}/>
                <Route exact path="/about" render={() => (
                    <About route={this.props.history.push} handleLogout={this.handleLogout.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
                )}/>
                <Route exact path="/myBookings"  render={() => (
                   <MyBookings route={this.props.history.push}/>
                )}/>
                <Route exact path="/AddFlight" render={() => (
                    <AddFlight route={this.props.history.push} handleAddFlight={this.handleAddFlight.bind(this)} />
                )}/>
                <Route exact path="/AddHotel" render={() => (
                    <AddHotel route={this.props.history.push} handleAddHotel={this.handleAddHotel.bind(this)} />
                )}/>
                <Route exact path="/AddCar" render={() => (
                    <AddCar route={this.props.history.push} handleAddCar={this.handleAddCar.bind(this)} />
                )}/>
                <Route exact path="/AdminProfile" render={() => (
                    <AdminProfile route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
                <Route exact path="/Analytics" render={() => (
                <Analytics route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
                <Route exact path="/SearchFlight" render={() => (
                    <SearchFlight route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
                <Route exact path="/SearchCar" render={() => (
                    <SearchCar route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
                <Route exact path="/SearchHotel" render={() => (
                    <SearchHotel route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
                <Route exact path="/ModifyAccount" render={() => (
                    <ModifyAccount route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
                <Route exact path="/FetchBills" render={() => (
                    <FetchBills route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
                )}/>
            <Route exact path="/ReactiveGrid" render={() => (
                <ReactiveGrid route={this.props.history.push} handleAdminProfile={this.handleAdminProfile.bind(this)} />
            )}/>
        </div>




    );
  }
}

export default withRouter(Login);
