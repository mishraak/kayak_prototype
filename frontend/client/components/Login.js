import React from 'react';
import {Link,Redirect} from 'react-router';
import Single from './Single'
import PhotoGrid from './PhotoGrid'
import FileDashBoard from './FileDashBoard'
import axios from 'axios'
import localstorage from 'local-storage'
//import Comments from './Comments';
const  Login = React.createClass({
    handleSubmit(e){
        const email =this.refs.email.value;
        const password =this.refs.password.value;
        axios.post("http://localhost:8080/routes/login",{email,password}).then(res=>{
           
            localstorage.set('userdata',res.data.user.email);
            localstorage.set('token',res.data.token)
            this.props.loginForms(res.data.user.email);
            this.divert();
            this.getfilesnow()
        });
       
        
        e.preventDefault();
    },
    divert(){
        if(localstorage.get('token')){
            this.props.history.push('/FileDashBoard');
        }
    },
    getfilesnow(){
        let config = {
            headers: {
              'Authorization': localstorage.get('token'),
            }
          }
        axios.get("http://localhost:8080/routes/getalldata",{params:{email:localstorage.get('userdata')}},config).then(
            (res)=>{
                console.log(res)
               localstorage.set('fileData',res.data);
               this.props.getallfiles(res.data)
            });
    }
    ,
 
    render(){
       
        
      /*  if(this.props.login[0].verified){
           this.props.history.push('/FileDashBoard');
        }*/
       
       
            return(
                
                   <div className="col-md-2 col-md-offset-7"> 
                    <form ref="loginForm" onSubmit={this.handleSubmit}>
                        <input type="email" ref="email" placeholder="Email" style={{"height":"30px","width":"270px","margin":"10px"}}/>
                        <input type="password" ref ="password" placeholder="Password" style={{"height":"30px","width":"270px","margin":"10px"}}/>
                        <input type="submit" value="submit" style={{"height":"30px","width":"270px","margin":"10px","background-color":"#1167fb","color":"white"}}/>
                    </form>
                   </div>
                   
                   
                )
        }
        
   
    
});
export default  Login;