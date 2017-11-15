import React, { Component } from 'react';



class CarsDash extends Component {
  render() {
    return (
      <div className="dashboard">
     <input type="text" className="formFields" style={{"marginLeft":"100px"}}/>
     <input type="datetime-local" className="formFields"/>
     <input type="datetime-local" className="formFields"/>
    <img src={require("../images/enter.png")} style={{"height":"55px","width":"55px","float":"right","margin-top":"58px","margin-right":"120px"}}/>
      </div>
    );
  }
}

export default CarsDash;
