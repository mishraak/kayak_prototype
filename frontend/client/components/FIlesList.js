import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import localstorage from 'local-storage';
import filedetails from '../data/fetch_files';
const  FilesList = React.createClass({


    renderList(file){
        console.log('file');
        console.log(file);
           return(
               <li key={file.FileId+' '+file.FILENAME}>{file.FILENAME}</li>
           )
       
        },
    render(){
        
        console.log(this.props.fileData.filedata)
       
            return(
                <div className="col-md-2 col-md-offset-3">
                    <div className="well" style={{"width":"550px"}}> 
                        <ul>
                        {console.log('Weeks of welcome...')}
                            {console.log(this.props.filedetails)}
                            
                             {this.props.filedetails.filedata.map(this.renderList)}
                              
                           
                        </ul>
                     </div>
                 </div>
                )
        
    }
});
export default  FilesList;




      