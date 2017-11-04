import React from 'react';
import {Link} from 'react-router';
//import Comments from './Comments';
const  Register = React.createClass({
    handleSubmit(e){
        const firstname = this.refs.firstname.value;
        const lastname =this.refs.lastname.value;
        const email =this.refs.email.value;
        const password =this.refs.password.value;
        this.props.registers(firstname,lastname,email,password);
        e.preventDefault();
    },
    divForSuccessAndFailure(){
        if(this.props.register[0].registered){
            return(<div  className={(this.props.register[0].registered)? 'alert alert-success': 'alert alert-warning'}>
            {(this.props.register[0].registered)? 'User Registered, Now you can Login':'Sorry! There was an error'}
         </div>);
        }
       
    },
    render(){
        console.log("Login");
        console.log(this.props.posts);
       
        console.log(this.props.register);
     
       //console.log(...state.register);
      
    return(
           <div>
               
            
            {this.divForSuccessAndFailure()}
            <div className="col-md-2 col-md-offset-7">
           <form ref="registerform" onSubmit={this.handleSubmit}>
            <input type="text" ref="firstname" placeholder="First Name" style={{"height":"30px","width":"270px","margin":"10px"}}/>
            <input type="text" ref="lastname" placeholder="Last Name" style={{"height":"30px","width":"270px","margin":"10px"}}/>
            <input type="text" ref="email" placeholder="Email" style={{"height":"30px","width":"270px","margin":"10px"}}/>
            <input type="text" ref ="password" placeholder="Password" style={{"height":"30px","width":"270px","margin":"10px"}}/>
            <input type="submit" value="submit" style={{"height":"30px","width":"270px","margin":"10px","background-color":"#1167fb","color":"white"}}/>
            
            </form>
            </div>
            </div>
           
           
        )
    }
});
export default  Register;