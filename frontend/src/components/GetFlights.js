import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';

import Book from './Book';
import FilterFlight from './FilterFlight'


class GetFlights extends Component {

    state= {
        flights: [],
        returnFlights:[]
    };

    componentWillMount(){
        API.getflights(this.props.searchCriteria)
            .then(res => {
                res.data.map((val)=> {
                    val.display=true; //for filter
                });
                this.setState({flights:res.data});
            });
        if(this.props.searchCriteria.toDate!==''){
            API.getReturnFlights(this.props.searchCriteria)
                .then(res => {
                    this.setState({returnFlights:res.data});
                });
        }
    }

    handleTimeFilter(timeRange){
        let modifySearch = this.state.flights;
        console.log(timeRange);
        let tempStore=[];
        if(modifySearch!=null){
            let index = modifySearch.findIndex((res)=>{
                //alert(res.departure.split(":")[0]);
                if(parseInt(res.departure.split(":")[0])>= timeRange[0] && parseInt(res.arrival.split(":")[0])<timeRange[1]){
                    res.display=true;
                    tempStore.push(res);
                }else{
                    res.display=false;
                    tempStore.push(res);
                }


            });
            this.setState({flights:tempStore});
        }
    }

    returnWayFlights(){
        return(
            <table className="table table-striped">


                <tbody>
                <tr className="row">
                    <td>
                        Flight
                    </td>
                    <td>
                        Departure time
                    </td>
                    <td>
                        Arrival time
                    </td>
                    <td>
                        Origin
                    </td>
                    <td>
                        Destination
                    </td>
                    <td>
                        Class
                    </td>
                    <td>
                        Price
                    </td>

                </tr>

                {this.state.returnFlights.map((flight, index) =>

                    <tr className="row" key={flight}>

                        <td>
                            {flight.flight_id}
                        </td>
                        <td>
                            {flight.arrival}
                        </td>
                        <td>
                            {flight.departure}
                        </td>
                        <td>
                            {flight.origin}
                        </td>
                        <td>
                            {flight.destination}
                        </td>
                        <td>
                            {flight.class_name}
                        </td>
                        <td>
                            <b>${flight.prices}</b>
                            {this.props.isLoggedIn ? <Book details={[flight]}/> : ""}

                        </td>
                    </tr>
                )}


                </tbody>
            </table>
        )

    }


    render() {
        let searchRes;
        console.log('display the state');
        console.log(this.state.flights);
        if(this.state.flights!=null) {
            searchRes = this.state.flights.map((flight) => {
                if (flight.display === true) {
                    return (

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
                                {this.props.isLoggedIn?<Book details={[flight]}/>:""}

                            </td>
                        </tr>
                    )
                }
            });
        }
return(
            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")}/>
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <div style={{"marginLeft":"200px"}}>
                        <Nav  isLoggedIn={this.props.isLoggedIn} route={this.props.route} handleLogout={this.props.handleLogout} handleLogin={this.props.handleLogin}/>
                    </div>
                    <div>

                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            Time
                            <FilterFlight rangeVal={this.handleTimeFilter.bind(this)} />
                        </div>
                        <div className="col-md-10">
                            <div className="table-responsive">
                                <h4 className="text-center">Total {this.state.flights.length} flight(s) found</h4>

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
                                    {searchRes}




                                    </tbody>
                                </table>

                                {this.props.searchCriteria.toDate!==''?'Return flights':''}
                                {this.props.searchCriteria.toDate!==''?this.returnWayFlights():''}

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetFlights;