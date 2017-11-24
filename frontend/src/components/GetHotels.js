import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';


class GetHotels extends Component {

    state= {
        Hotels: []
    };

    componentWillMount(){
        API.getHotels(this.props.searchCriteria)
            .then(res => {
                this.setState({Hotels:res.data});
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
                            This is left column for adding CAR filter criterias
                        </div>
                        <div className="col-md-10">
                            <div className="table-responsive">
                                <h4 className="text-center">{this.state.Hotels.length} hotel(s) found</h4>
                                <table className="table table-striped">


                                    <tbody>
                                    <tr className="row"   >

                                        <td >
                                            Name
                                        </td>
                                        <td >
                                            Stars
                                        </td>
                                        <td >
                                            RoomType
                                        </td>
                                        <td >
                                            Price
                                        </td>

                                    </tr>

                                    {this.state.Hotels.map((hotel,index) =>

                                        <tr className="row" key={hotel}  >

                                            <td >
                                                {hotel.hotel_name}
                                            </td>
                                            <td >
                                                {hotel.stars}
                                            </td>
                                            <td >
                                                {hotel.room_type}
                                            </td>

                                            <td >
                                                <b>${hotel.price}</b>
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

export default GetHotels;