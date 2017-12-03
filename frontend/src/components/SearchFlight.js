import React, {Component} from 'react';
import * as API from '../api/API'
import Nav from './Nav'

class SearchFlight extends Component {

    state={
        id:'',
        name:'',
        origin:'',
        destination:''
    };
    updateFlightInfo = () => {
        var status;

        API.updateFlights({
            origin:this.state.origin,
            destination:this.state.destination,
            arrival:this.state.arrival,
            departure:this.state.departure,
            flight_id:this.state.id
        })
            .then((res) => {
                status = res.status;
                try{
                    alert("Updated successfully");
                }
                catch(err){window.alert(`Some Error: ${err}`);}
            });
    };

    searchFlight(){
        API.searchFlight(this.state.id)
            .then((res) => {
            if (res.status === 201) {
                this.setState({origin:res.data[0].origin,
                               destination:res.data[0].destination,
                                arrival:res.data[0].arrival,
                                departure:res.data[0].departure


                });
            } else {
                window.alert("Something went wrong while fetching!!")
            }
        });
    }


    renderAbout(){
        console.log("user status : " + localStorage.getItem("user_status"));

        //alert(JSON.stringify(this.state.image.data));
        if (localStorage.getItem("user_status")==0) {
            return(
                <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                    <img src={require("../images/phoenix.png")}/>

                    <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>

                        <div style={{"marginLeft":"200px"}}>

                        </div>
                        <div>
                            <div className="col-md-4 "    style={{"height":"500px","width":"300px","backgroundColor":"white",opacity:"0.6"}}>

                                <label className="col-md-4" style={{"textAlign":"Right"}}>Search Flight</label> <input type='text' className="adminField" id='username' value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                                <button onClick={()=>{this.searchFlight()}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Search flight</button>

                            </div>
                            <div className="userDetails">
                                <div style={{"fontSize":"30px"}}>Listing Details
                                    <hr/>
                                </div>

                                <div className="formFormat" >
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>FlightId</label> <input type='text' className="adminField" id='username' disabled value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Origin</label><input type='text' className="adminField" id='password' value={this.state.origin} onChange={e => this.setState({ origin: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Destination</label><input type='text'  className="adminField" id='first_name' value={this.state.destination} onChange={e => this.setState({ destination: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Arrival </label> <input type='text'  className="adminField" id='last_name' value={this.state.arrival} onChange={e => this.setState({ arrival: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}> Departure </label><input type='text'  className="adminField" id='address' value={this.state.departure} onChange={e => this.setState({ departure: e.target.value })}/>

                                </div>
                                <div className='row' style={{"opacity":"1"}}>
                                    <button className='update-info' onClick={()=>this.updateFlightInfo()}>Update Information</button>
                                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                                    <button onClick={()=>{this.props.route("/AdminProfile")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Admin Profile</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                    <img src={require("../images/phoenix.png")}/>

                    <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>

                        <div style={{"marginLeft":"200px"}}>


                        </div>
                        <div>
                            <h1>"You are not authorized to see this page!!!"</h1>
                        </div>

                    </div>
                </div>
            );
        }
    }








    render(){
        return(
            <div>
                {this.renderAbout()}
            </div>
        )
    }
}

export default SearchFlight;