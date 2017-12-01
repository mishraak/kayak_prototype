import React, {Component} from 'react';
import * as API from '../api/API'
import AdminProfile from './AdminProfile'
import Nav from './Nav'

var data=[];

class About extends Component {

    updateInfo = () => {
      var status
      console.log("here "+document.getElementById('first_name').value);
      API.handleAboutChange({
                                email:document.getElementById('username').value,
                                password:document.getElementById('password').value,
                                first_name:document.getElementById('first_name').value,
                                last_name:document.getElementById('last_name').value,
                                address:document.getElementById('address').value,
                                city:document.getElementById('city').value,
                                state:document.getElementById('state').value
                            })
      .then((res) => {
        status = res.status;
        try{
          return res.json();
        }
        catch(err){window.alert(`Some Error: ${err}`);}
      }).then((json) => {
        if (status === 201) {
            this.props.history.push('/about');
        } else {
            window.alert("Something went wrong while updating your Personal Information!!")
        }
      });
  }


  renderAbout(){
    console.log("user status : " + localStorage.getItem("user_status"));
    if (localStorage.getItem("user_status")==0) {
      return(
          <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

              <img src={require("../images/phoenix.png")}/>

              <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>

                  <div style={{"marginLeft":"200px"}}>
                      <Nav />
                  </div>
                  <div>
                      <div className="col-md-4 "    style={{"height":"500px","width":"300px","backgroundColor":"white",opacity:"0.6"}}>
                          <img className="profilePic" src={require("../images/phoenix.png")} alt="Profile"  />
                      </div>
                      <div className="userDetails">
                          <div style={{"fontSize":"30px"}}>Profile Details
                              <hr/>
                          </div>

                          <div className="formFormat" >
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>Email Address</label> <input type='text' className="adminField" id='username' value={localStorage.getItem("username")} onChange={e => this.setState({ username: e.target.value })} />
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>Password</label><input type='text' className="adminField" id='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>First Name</label><input type='text'  className="adminField" id='first_name' value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}/>
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>Last Name </label> <input type='text'  className="adminField" id='last_name' value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}/>
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}> Address </label><input type='text'  className="adminField" id='address' value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>City  </label> <input type='text'  className="adminField" id='city' value={this.state.city} onChange={e => this.setState({ city: e.target.value })}/>
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>State  </label><input type='text'  className="adminField" id='state' value={this.state.state} onChange={e => this.setState({ state: e.target.value })}/>
                              <br/>
                          </div>
                          <div className='row' style={{"opacity":"1"}}>
                              <button className='update-info' onClick={this.updateInfo}>Update Information</button>
                              <button className='cancel-update-info' onClick={()=>{this.props.history.push('/about');}}>Cancel</button><br/>
                              <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                              <button onClick={()=>{this.props.route("/AdminProfile")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Admin Profile</button>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
      else {
            return(
                <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                    <img src={require("../images/phoenix.png")}/>

                    <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>

                        <div style={{"marginLeft":"200px"}}>
                            <Nav />
                        </div>
                        <div>
                            <div className="col-md-4 "    style={{"height":"500px","width":"300px","backgroundColor":"white"}}>
                                <img className="profilePic" src={require("../images/phoenix.png")} alt="Profile"  />
                            </div>
                            <div className="userDetails">
                                <div style={{"fontSize":"30px"}}>Profile Details
                                    <hr/>
                                </div>

                                <div className="formFormat" >
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Email Address</label> <input type='text' className="adminField" id='username' value={localStorage.getItem("username")} onChange={e => this.setState({ username: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Password</label><input type='text' className="adminField" id='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>First Name</label><input type='text'  className="adminField" id='first_name' value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Last Name </label> <input type='text'  className="adminField" id='last_name' value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}> Address </label><input type='text'  className="adminField" id='address' value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>City  </label> <input type='text'  className="adminField" id='city' value={this.state.city} onChange={e => this.setState({ city: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>State  </label><input type='text'  className="adminField" id='state' value={this.state.state} onChange={e => this.setState({ state: e.target.value })}/>
                                    <br/>
                                </div>
                                <div className='row' style={{"opacity":"1"}}>
                                    <button className='update-info' onClick={this.updateInfo}>Update Information</button>
                                    <button className='cancel-update-info' onClick={()=>{this.props.history.push('/about');}}>Cancel</button><br/>
                                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      );
    }
  }

    state = {
            email:"",
            image:"",
            password:"",
            first_name:"",
            last_name:"",        
            address:"",
            city:"",
            state:""      
    };



    componentWillMount() {            
      var username = localStorage.getItem("username");      
      API.handleAbout(username)
          .then((data) => {
                console.log(data.data[0].email);                                                                                              
                this.setState({
                            email: data.data[0].email,
                            password: data.data[0].password,
                            image: data.data[0].image,
                            first_name: data.data[0].first_name,
                            last_name: data.data[0].last_name,
                            address: data.data[0].address,
                            city: data.data[0].city,
                            state: data.data[0].state
               }); 
      });
  }


  render(){
      return(         
          <div>
            {this.renderAbout()}
          </div>
      )
  }
}

export default About;