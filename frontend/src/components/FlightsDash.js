import React, { Component } from 'react';


class FlightsDash extends Component {
    state={
        origin:'',
        destination:'',
        fromDate:'',
        toDate:'',
        class:'Economy',
        searchType:'Flights'
    };



  render() {
    return (
      <div className="dashboard">

        <input type="text" placeholder="Origin" className="formFields" style={{"marginLeft":"15px",width:"180px"}} onChange={e => this.setState({ origin: e.target.value })}/>
        <input type="text" placeholder="Destination" className="formFields" style={{width:"180px"}} onChange={e => this.setState({ destination: e.target.value })}/>
        <input type="date" className="formFields" style={{width:"180px"}} onChange={e => this.setState({ fromDate: e.target.value })}/>
        <input type="date" className="formFields" style={{width:"180px"}} onChange={e => this.setState({ toDate: e.target.value })}/>
        <select className="formFields" style={{width:"180px"}} onChange={e => this.setState({ class: e.target.value })}>
              <option className="optionField">Economy</option>
              <option className="optionField">Business</option>
        </select>
        <img src={require("../images/enter.png")} alt="Flights" onClick={()=>this.props.getSearchResults(this.state)} style={{"height":"55px","width":"55px","marginTop":"58px","marginRight":"0px","float":"right"}}/>
      </div>
    );
  }
}

export default FlightsDash;
