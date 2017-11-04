import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';

const  Leftpanel = React.createClass({
    render(){

    return(
        <div className="left-panel" style={{"backgroundColor":"#F7F9FB","height":"800px","width":"250px",}}>
          <div className="btn btn-primary">
          <Link className="button" to={`FileDashBoard/Groups`}>
             Groups
          </Link>
          </div> 
        </div>
            
        )
    }
    


});
export default  Leftpanel;