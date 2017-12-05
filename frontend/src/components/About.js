import React, {Component} from 'react';
import * as API from '../api/API'
import Nav from './Nav'
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';


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
            if (status === 201) {
                alert("updation successful");

            }
          return res.json();

        }
        catch(err){window.alert(`Some Error: ${err}`);}
      }).then((json) => {
        if (status === 201) {
            alert("updation successful");
            this.props.history.push('/about');
        } else {
            window.alert("Something went wrong while updating your Personal Information!!")
        }
      });
  };

    deleteProfile(){
        API.deleteProfile()
            .then((res) => {
                if(res.status===201){
                    alert("successfully deleted profile \n Routing to homepage...");
                    this.props.handleLogout();

                }
            })
    }

    handleFileUpload = (event) => {

        const payload = new FormData();
        var f = event.target.files[0];


        payload.append('mypic', event.target.files[0]);
        console.log(payload);
        API.uploadFile(payload)
            .then((res) => {
                var x=this.state.path;
                this.setState({path:""});

                if (res.status === 201) {
                    API.handleAbout(localStorage.getItem("username"))
                        .then((data) => {
                            this.setState({
                                image: new Buffer(data.data[0].image).toString('base64'),
                            });

                        });
                }
            });

    };

    componentDidMount(){
        this.totalTime=(new Date).getTime();
        API.log({page:"About"});
    };


    componentWillUnmount() {
        var node= {
            username: localStorage.getItem("username"),
            data: {
                pageName: "About",
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



  renderAbout(){
    console.log("user status : " + localStorage.getItem("user_status"));

      var image = new Buffer(this.state.image.toString(), 'binary').toString('base64');
      //alert(JSON.stringify(this.state.image.data));
      if (localStorage.getItem("user_status")==0) {
      return(
          <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

              <img src={require("../images/phoenix.png")}/>

              <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>

                  <div style={{"marginLeft":"200px"}}>
                      <Nav route={this.props.route} isLoggedIn={this.props.isLoggedIn} handleLogout={this.props.handleLogout}/>
                  </div>
                  <div>
                      <div className="col-md-4 "    style={{"height":"500px","width":"300px","backgroundColor":"white",opacity:"0.6"}}>
                          <img className="profilePic" src={"data:image/jpeg;base64," + this.state.image} alt="Profile"  />

                          <TextField
                              className={'fileupload'}
                              type="file"
                              name="mypic"
                              onChange={this.handleFileUpload}
                          />

                      </div>
                      <div className="userDetails">
                          <div style={{"fontSize":"30px"}}>Profile Details
                              <hr/>
                          </div>

                          <div className="formFormat" >
                              <br/>
                              <label className="col-md-4" style={{"textAlign":"Right"}}>Email Address</label> <input type='text' className="adminField" id='username' disabled value={localStorage.getItem("username")} onChange={e => this.setState({ username: e.target.value })} />
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
                              <button className='cancel-update-info' onClick={()=>{this.props.route('/about');}}>Cancel</button><br/>
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
                            <Nav route={this.props.route} isLoggedIn={this.props.isLoggedIn} handleLogout={this.props.handleLogout}/>
                        </div>
                        <div>
                            <div className="col-md-4 "    style={{"height":"500px","width":"300px","backgroundColor":"white"}}>
                                <img className="profilePic" src={"data:image/jpeg;base64," + this.state.image} alt="Profile"  />
                                <TextField
                                    className={'fileupload'}
                                    type="file"
                                    name="mypic"
                                    onChange={this.handleFileUpload}
                                />
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

                                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                                    <button onClick={()=>this.deleteProfile()} style={{"height":"30px","margin":"10px","backgroundColor":"#ff1207","color":"white","textAlign":"center"}}>Delete profile</button>
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
            image:"/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyQ0E5QTQyM0Q5RjExRTQ4NTkxRTRDMTBFMEI2OTNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyQ0E5QTQzM0Q5RjExRTQ4NTkxRTRDMTBFMEI2OTNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjJDQTlBNDAzRDlGMTFFNDg1OTFFNEMxMEUwQjY5M0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjJDQTlBNDEzRDlGMTFFNDg1OTFFNEMxMEUwQjY5M0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",
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
                            image: new Buffer(data.data[0].image).toString('base64'),
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