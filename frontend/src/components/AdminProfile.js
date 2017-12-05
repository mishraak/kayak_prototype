import React, {Component} from 'react';
import * as API from '../api/API';
import Nav from './Nav';
  
class AdminProfile extends Component {

  render(){
      if(localStorage.getItem("user_status")==0) {
          return (
              <div style={{"display": "flex", "flexDirection": "row", "minwidth": "1000px"}}>

                  <img src={require("../images/phoenix.png")}/>
                  <div style={{
                      "position": "absolute",
                      "zIndex": "10",
                      "margin": "auto",
                      "width": "100%",
                      "padding": "10px"
                  }}>
                      <div>

                      </div>

                      <div className="row about1">
                          <div className="center-block">
                              <div className="row">
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/AddFlight');
                                      }}>Add Flight
                                      </button>
                                      <br/>
                                  </div>
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/AddHotel');
                                      }}>Add Hotel
                                      </button>
                                      <br/>
                                  </div>
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/AddCar');
                                      }}>Add Car
                                      </button>
                                      <br/>
                                  </div>
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/analytics');
                                      }}>Analytics
                                      </button>
                                      <br/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/SearchFlight');
                                      }}>Search Flight
                                      </button>
                                      <br/>
                                  </div>
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/SearchHotel');
                                      }}>Search Hotel
                                      </button>
                                      <br/>
                                  </div>
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/SearchCar');
                                      }}>Search Car
                                      </button>
                                      <br/>
                                  </div>
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/fetchbills');
                                      }}>Search billing
                                      </button>
                                      <br/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-3">
                                      <button className='cancel-update-info' style={{
                                          "height": "30px",
                                          "margin": "10px",
                                          "backgroundColor": "#ff5d11",
                                          "color": "white",
                                          "textAlign": "center"
                                      }} onClick={() => {
                                          this.props.route('/ModifyAccount');
                                      }}>Modify user account
                                      </button>
                                      <br/>
                                  </div>


                              </div>

                              <div className='row'>
                                  <button onClick={() => {
                                      this.props.route("/")
                                  }} style={{
                                      "height": "30px",
                                      "margin": "10px",
                                      "backgroundColor": "#ff5d11",
                                      "color": "white",
                                      "textAlign": "center"
                                  }}>Homepage
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          )
      }
      else{
          return(
              <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                  <img src={require("../images/phoenix.png")}/>
                  <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                  <h1>You are not authorized to view this page!!</h1>
                  </div>
              </div>
          )
      }
  }
}

export default AdminProfile;


