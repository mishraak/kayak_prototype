import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';
import BookCar from './BookCar';


class GetCars extends Component {

    state= {
        bookings:[]
    };

    componentWillMount(){
        API.getUserBookings()
            .then(res => {
                this.setState({bookings:res.data});
            });



    }
    componentDidMount(){

        this.totalTime=(new Date).getTime();
        API.log({page:"MyBookings"});
    }



    render() {
        return (

            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")}/>
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                    <h3>My past bookings</h3>
                    <table className="table table-striped">
                        <tbody>
                        <tr className="row"   >

                            <td >
                                Booking Date
                            </td>
                            <td >
                                Type
                            </td>
                            <td >
                                Total amount
                            </td>


                        </tr>

                        {this.state.bookings.map((b,index) =>

                            <tr className="row" key={b.billing_id}  >

                                <td >
                                    {b.billing_date}
                                </td>
                                <td >
                                    {b.booking_type}
                                </td>
                                <td >
                                    ${b.amount}
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default GetCars;