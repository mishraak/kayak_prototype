import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';
import Leftpanel from './Leftpanel'
import axios from 'axios'
import localstorage from 'local-storage';
import GroupModal from './GroupModal';
const  Groups = React.createClass({

 handleSubmit(e){
     //console.log(this.refs.grp_name.value);
     var user = localstorage.get('userdata');
    
    axios.post('http://localhost:8080/routes/groupadd',{grp_name:this.refs.grp_name.value,admin:user}).then
    ((res)=>{
        console.log('response//to be deleted');
        console.log(res);
        this.props.getGroups(res.data.records,res.data.users);
    })
    //an alternative to this as the action is independant
    e.preventDefault();
 },
 rendergroups(group){
     return(
        <tr >
             <td><GroupModal groupname= {group.GROUPNAME} {...this.props}/></td>
             <td>{group.ADMIN}</td> 
             <td></td>
       </tr>
         
     )
 },
 componentWillMount(){
    var user = localstorage.get('userdata');
    axios.get(' http://localhost:8080/routes/groupsget',{params:{email:user}}).then(
        (res)=>{
            console.log(res.data);
            this.props.getGroups(res.data);
        }
    )
    
 }
 ,
    render(){
       
    return(
       <div>
           <div style={{"display":"flex", "flexDirection":"row"}}>
          <Leftpanel />
          <div style={{"height":"55px","width":"60%","backgroundColor":"#EAF3FC","padding":"12px","margin-left":"5px"}}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="grp_name" placeholder="Add Group" className="col-md-1 col-md-offset-1" style={{"height":"30px","width":"25%"}}/>
                    <input type="submit" className="btn btn-primary col-md-2 col-md-offset-1" value="Add Group" style={{"height":"30px"}}/>
                </form><br/>
                <GroupModal/>
             <div  style={{"margin-top":"30px"}}>
             <h3>Groups Owned By You</h3>
            <table className="table">
             
                <thead>
                <tr>        
                    <th>
                        Group Name
                    </th>
                    <th>
                        Owner
                    </th>
                    <th>
                        Members
                    </th>
                
                </tr>
                </thead> 
                <tbody>
              
                {this.props.groupdata.data.map(this.rendergroups)}
              
                </tbody> 
            </table> 
           
           
        </div>  
        </div>
       
       
        </div>
        </div>
            
        )
    }
    


});
export default  Groups;