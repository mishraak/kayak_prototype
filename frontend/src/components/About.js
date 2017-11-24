import React, {Component} from 'react';
import * as API from '../api/API'
  

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
                    <div>
                      <img src={this.state.image} alt="Profile" />
                    </div>
                    <div className="row about1">
                        <div className="center-block">
                            <pre>
                                <br/>
                                Email Address           : <input type='text' id='username' value={localStorage.getItem("username")} onChange={e => this.setState({ username: e.target.value })} />
                                <br/>
                                Password                : <input type='text' id='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                <br/>
                                First Name              : <input type='text' id='first_name' value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}/>
                                <br/>
                                Last Name               : <input type='text' id='last_name' value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}/>
                                <br/>
                                Address                 : <input type='text' id='address' value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
                                <br/>
                                City                    : <input type='text' id='city' value={this.state.city} onChange={e => this.setState({ city: e.target.value })}/>
                                <br/>
                                State                   : <input type='text' id='state' value={this.state.state} onChange={e => this.setState({ state: e.target.value })}/>
                                <br/>                      
                            </pre>
                            <div className='row'>
                              <button className='update-info' onClick={this.updateInfo}>Update Information</button>
                              <button className='cancel-update-info' onClick={()=>{this.props.history.push('/about');}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
      )
  }
}

export default About;