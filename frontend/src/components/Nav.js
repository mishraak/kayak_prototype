import React, { Component } from 'react';
//import {Link} from 'react-router';
//import styles from './app.css';

class Nav extends Component {

    state={
        email:'',
        password:''
    };

    renderLogIn()
    {
        if(!this.props.isLoggedIn){
            return(
                <div>

                        <input type="email" ref="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/>
                        <input type="password" ref ="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/>

                        <button onClick={()=>{this.props.handleLogin(this.state)}}  style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Login</button>                        
                        <button onClick={()=>this.props.route("/signup")} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Signup</button>

                </div>
            )
        }
        else
        {
            return(
                <div>
                    <button onClick={()=>{this.props.handleLogout()}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Logout</button>
                    <button onClick={()=>this.props.route("/about")} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>About</button>
            </div>
            )
        }

    }


    render(){
    return(
            <div>
                 
                 <nav className="navbar" style={{"textShadow":"none","fontSize":"13px","color":"white"}}>
                 <div className="container-fluid" style={{"backgroundColor":"none"}}>
                   <div className="navbar-header">
                   <img src={require("../images/logo.png")} alt="Logo" style={{"marginTop":"10px"}}/>
                   </div>
                   <ul className="nav navbar-nav" style={{"backgroundColor":"none"}}>
                     <li className="active"><a href="#" style={{"color":"white"}}>Flights</a></li>
                     <li ><a href="#" style={{"color":"white"}}>Hotels</a></li>
                     <li  className="nav-item" ><a href="#" style={{"color":"white"}}>Cars</a></li>
                     <li>
                         {this.renderLogIn()}
                     </li>
                   </ul>

                 </div>
               </nav>
               
             <hr style={{"opacity":"100%","width":"1000px"}}/>
             </div>
        )
    }
    


};
export default  Nav;