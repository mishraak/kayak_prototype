import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';
import BookCar from './BookCar';
import {insertActivity} from "../api/API";


class MyBookings extends Component {

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

    insertActivity(){
        //localStorage.removeItem("trackUser");
        var node= {
            username: localStorage.getItem("username"),
            data: {
                pageName: 'MyBookings',
                timeSpent: ((new Date).getTime()-this.totalTime)/1000
            },
            next: null
        };

        if(!localStorage.getItem("trackUser")){
            localStorage.setItem("trackUser",JSON.stringify(node));
        }
        else{
            var linkedList=JSON.parse(localStorage.getItem("trackUser"));
            var curr=linkedList;
            while(curr.next!==null){
                curr=curr.next;
            }
            curr.next=node;
            localStorage.setItem("trackUser",JSON.stringify(linkedList));
        }

        //API.insertActivity(linkedList);
    }



    render() {
        return (

            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")} style={{opacity:"0.5"}}/>
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <button onClick={()=>{this.insertActivity();this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>
                    <h3>My past bookings</h3>
                    <table className="table " >
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

                                <td style={{color:"blue"}}>
                                    {b.billing_date}
                                </td>
                                <td style={{color:"blue"}}>
                                    {b.booking_type}
                                </td>
                                <td style={{color:"blue"}}>
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

export default MyBookings;