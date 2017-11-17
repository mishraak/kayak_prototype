import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';


class GetFlights extends Component {

    state= {
        flights: []
    };

    componentWillMount(){
        API.getflights(this.props.searchCriteria)
            .then(res => {
                this.setState({flights:res.data});
            })
    }

    render() {
        return (

            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")}/>
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <div style={{"marginLeft":"200px"}}>
                        <Nav  isLoggedIn={this.props.isLoggedIn} handleLogin={this.props.handleLogin}/>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            This is left column for adding filter criterias
                        </div>
                        <div className="col-md-10">
                            <div className="table-responsive">
                                <h4 className="text-center">{this.state.flights.length} flight(s) found</h4>
                                <table className="table table-striped">


                                    <tbody>
                                    <tr className="row"   >
                                        <td >
                                            Flight
                                        </td>
                                        <td >
                                            Departure time
                                        </td>
                                        <td >
                                            Arrival time
                                        </td>
                                        <td >
                                            Origin
                                        </td>
                                        <td >
                                            Destination
                                        </td>
                                        <td >
                                            Class
                                        </td>
                                        <td >
                                            Price
                                        </td>

                                    </tr>

                                        {this.state.flights.map((flight,index) =>

                                            <tr className="row" key={flight}  >

                                                <td >
                                                    {flight.flight_id}
                                                </td>
                                                <td >
                                                    {flight.arrival}
                                                </td>
                                                <td >
                                                    {flight.departure}
                                                </td>
                                                <td >
                                                    {flight.origin}
                                                </td>
                                                <td >
                                                    {flight.destination}
                                                </td>
                                                <td >
                                                    {flight.class_name}
                                                </td>
                                                <td >
                                                    <b>${flight.prices}</b>
                                                    {this.props.isLoggedIn?<button className="btn-danger">Book</button>:""}

                                                </td>
                                            </tr>
                                        )}



                                    </tbody>
                                </table>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetFlights;