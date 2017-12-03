import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import * as API from '../api/API';

export default class FormDialog extends React.Component {
    state = {
        open: false,
        textFieldValue:'',
        username:''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    componentDidMount(){
        this.totalTime=(new Date).getTime();
    }



    handleRequestClose = (event) => {
        this.setState({ open: false });
        //alert(this.props.details[0].airline);
        console.log("action",event.target.innerHTML);
        if(event.target.innerHTML==="Confirm Booking"){
            console.log("book flight add",this.state.username);
            API.book({origin:this.props.details[0].origin,destination:this.props.details[0].destination,amount:this.props.details[0].prices,name:this.props.details[0].airline,type:"Flight",email:window.localStorage.getItem("username")})
        }
        //console.log(this.state.textFieldValue);
    };



    render() {
        return (
            <div>
                <button className="bg-primary vert-offset-top-1"  onClick={this.handleClickOpen}>Book</button>
                <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                    <DialogTitle><i className="fa fa-user" aria-hidden="true"> Book</i></DialogTitle>
                    <DialogContent>
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

                            {this.props.details.map((flight,index) =>

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


                                    </td>
                                </tr>
                            )}



                            </tbody>
                        </table>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Confirm Booking
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}