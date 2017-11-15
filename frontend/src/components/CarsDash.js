import React, { Component } from 'react';



class CarsDash extends Component {
  render() {
    return (
      <div className="dashboard">
     <input type="text" className="formFields" style={{"marginLeft":"100px"}}/>
     <input type="date" className="formFields"/>
     <input type="date" className="formFields"/>
    <img src={require("../images/phoenix.jpg")} style={{"height":"55px","width":"55px","float":"right","marginTop":"58px","marginRight":"120px"}}/>
      </div>
    );
  }
}

export default CarsDash;
