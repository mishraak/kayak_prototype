import React, { Component } from 'react';



class CarsDash extends Component {

    state={
        Location:'',
        searchType:'Cars'
    };

  render() {
    return (
      <div className="dashboard">
     <input type="text" placeholder="Location" className="formFields" style={{"marginLeft":"100px"}} onChange={e => this.setState({ Location: e.target.value })}/>
     <input type="date" className="formFields"/>
     <input type="date" className="formFields"/>
    <img src={require("../images/enter.png")} onClick={()=>this.props.getSearchResults(this.state)} style={{"height":"55px","width":"55px","float":"right","marginTop":"58px","marginRight":"120px"}}/>
      </div>
    );
  }
}

export default CarsDash;
