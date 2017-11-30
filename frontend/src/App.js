import React, { Component } from 'react';
import Login from './components/Login';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dashStatus:[]
    }
  }

componentWillMount(){
    this.setState({
      dashStatus:[
        {
            flights: true,
            hotels:false,
            cars:false

        }]
    })
}
dashUpdate(dash){
  let dashboard = this.state.dashStatus;
  switch(dash){
      case 'flight':
        dashboard[0].flights = true;
        dashboard[0].hotels = false;
        dashboard[0].cars = false;
        this.setState({dashStatus:dashboard})
      break;
      case 'hotels':
      dashboard[0].flights = false;
      dashboard[0].hotels = true;
      dashboard[0].cars = false;
      this.setState({dashStatus:dashboard})
      break;

      case 'cars':
      dashboard[0].flights = false;
      dashboard[0].hotels = false;
      dashboard[0].cars = true;
      this.setState({dashStatus:dashboard})
      break;
      default:
      dashboard[0].flights = true;
      dashboard[0].hotels = false;
      dashboard[0].cars = false;
      this.setState({dashStatus:dashboard})
  }
}
  render() {
    return (
      <div className="App" >
          <BrowserRouter>
              <Login dash={this.state.dashStatus} updateDash={this.dashUpdate.bind(this)} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
