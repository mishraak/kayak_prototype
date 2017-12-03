import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';
import BookCar from './BookCar';
import {insertActivity} from "../api/API";


class FetchBills extends Component {

    state= {
        bookings:[],
        date:'',
        month:''
    };

    getUserBookingsbydate(){
        API.getUserBookingsbydate(this.state.date)
            .then(res => {
                this.setState({bookings:res.data});
            });
    }

    getUserBookingsbyMonth(){
        API.getUserBookingsbyMonth()
            .then(res => {
                this.setState({bookings:res.data});
            });
    }



    render() {
        return (

            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")}/>
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                    <input type="date" className="formFields" style={{width:"180px"}} onChange={e => this.setState({ date: e.target.value })}/>

                    <button onClick={()=>{this.getUserBookingsbydate()}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Search by date</button>

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

export default FetchBills;