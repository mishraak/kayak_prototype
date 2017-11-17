import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './Nav'
import MainDashBoard from './MainDashBoard'
import FlightsDash from './FlightsDash'
import CarsDash from './CarsDash'
import HotelsDash from './HotelsDash'
import GetFlights from './GetFlights'

class Login extends Component {

 state={
     SearchCriteria:[]
 };

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
                        <img src={require("../images/phoenix.png")}/>
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
                    <GetFlights searchCriteria={this.state.SearchCriteria}/>
                )}/>
        </div>




    );
  }
}

export default withRouter(Login);
