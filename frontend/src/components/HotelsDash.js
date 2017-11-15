import React, { Component } from 'react';



class HotelsDash extends Component {
  render() {
    return (
      <div className="dashboard" style={{"width":"1100px","padding-right":"80px"}}>
        <input type="text" className="formFields" style={{"marginLeft":"15px"}}/>
       
     <input type="date" className="formFields" style={{}}/>
     <input type="date" className="formFields" style={{"width": "170px"}}/>
     <select className="formFields">
        <option className="optionField">1 Room 2 Guests </option>
        <option className="optionField">2 Room 4 Guests </option>
        <option className="optionField">3 Room 6 Guests </option>
        <option className="optionField">4 Room 8 Guests </option>
       
     </select>
      <img src={require("../images/enter.png")} style={{"height":"55px","width":"55px","margin-top":"58px","margin-right":"10px","float":"right"}}/>
       
      </div>
    );
  }
}

export default HotelsDash;
