import React, { Component } from 'react';



class FlightsDash extends Component {
  render() {
    return (
      <div className="dashboard">
        <input type="text" className="formFields" style={{"marginLeft":"15px"}}/>
        <input type="text" className="formFields" />
     <input type="datetime-local" className="formFields"/>
     <input type="datetime-local" className="formFields" />
    <img src={require("../images/enter.png")} style={{"height":"55px","width":"55px","margin-top":"58px","margin-right":"0px","float":"right"}}/>
       
      </div>
    );
  }
}

export default FlightsDash;
