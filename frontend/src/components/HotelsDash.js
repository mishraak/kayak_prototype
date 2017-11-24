import React, { Component } from 'react';



class HotelsDash extends Component {
    state={
        Location:'',
        rooms:'1 Room 2 Guests',
        searchType:'Hotels'
    };
  render() {
    return (
      <div className="dashboard" style={{"width":"1100px","paddingRight":"80px"}}>
        <input type="text" className="formFields" placeholder="Location" onChange={e => this.setState({ Location: e.target.value })} style={{"marginLeft":"15px"}}/>
       
     <input type="date" className="formFields" style={{}}/>
     <input type="date" className="formFields" style={{"width": "170px"}}/>
     <select className="formFields" onChange={e => this.setState({ rooms: e.target.value })}>
        <option className="optionField">1 Room 2 Guests </option>
        <option className="optionField">2 Room 4 Guests </option>
        <option className="optionField">3 Room 6 Guests </option>
        <option className="optionField">4 Room 8 Guests </option>
       
     </select>
      <img src={require("../images/enter.png")} onClick={()=>this.props.getSearchResults(this.state)}  style={{"height":"55px","width":"55px","marginTop":"58px","marginRight":"10px","float":"right"}}/>       
      </div>
    );
  }
}

export default HotelsDash;
