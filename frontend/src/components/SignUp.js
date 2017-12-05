import React,  {Component} from 'react';
import * as API from '../api/API'

import request from 'axios';
import Nav from "./Nav";

class SignUp extends Component{

    state = {
            email:"a@gmail.com",
            password:"password",
            first_name:"Akshay",
            last_name:"Mishra",        
            address:"3rd Street",
            city:"San Jose",
            state:"CA",
            zip_code:95113,
            phone:669269999,
            trip_id:123,
            image:"https://r3.whistleout.com.au/public/images/articles/2016/01/traveller.jpg",
            credit_card:1234567890,
            user_status:1        
    };

    componentDidMount(){
        API.log({page:"SignUp"});
    }

    renderSignup() {
        if(!this.props.isLoggedIn){
            return(
                <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                    <img src={require("../images/phoenix.png")}/>
                    <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                        <div>
                            <Nav/>
                        </div>
                    <label style={{color:"white"}}>Email</label><input type="email" ref="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label style={{color:"white"}}>Password</label><input type="password" ref ="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label style={{color:"white"}}>First name</label><input type="text" ref ="first_name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                    
                    <label style={{color:"white"}}>Last name</label><input type="text" ref ="last_name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>   
                    <label style={{color:"white"}}>Address</label><input type="text" ref ="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                             
                    <label style={{color:"white"}}>City</label><input type="text" ref ="city" value={this.state.city} onChange={e => this.setState({ city: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label style={{color:"white"}}>State</label><input type="text" ref ="state" value={this.state.state} onChange={e => this.setState({ state: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label style={{color:"white"}}>Zip Code</label><input type="number" ref ="zip_code" value={this.state.zip_code} onChange={e => this.setState({ zip_code: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label style={{color:"white"}}>Phone</label><input type="number" ref ="phone" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label style={{color:"white"}}>Trip ID</label><input type="number" ref ="trip_id" value={this.state.trip_id} onChange={e => this.setState({ trip_id: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label style={{color:"white"}}>Image</label><input type="text" ref ="image" value={this.state.image} onChange={e => this.setState({ image: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label style={{color:"white"}}>Credit Card</label><input type="number" ref ="credit_card" value={this.state.credit_card} onChange={e => this.setState({ credit_card: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <input type="hidden" ref ="user_status" value="1" onChange={e => this.setState({ trip_id: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <button onClick={()=>{this.props.handleSignup(this.state)}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Signup</button><br/>                                                   
                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>                                                   
                </div>
                </div>
            )
        }
    }

	render(){
        return (                          
            <div>
                {this.renderSignup()}
            </div>                            
        );
	}
}

export default SignUp;
