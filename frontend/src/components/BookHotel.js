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

    handleRequestClose = (event) => {
        this.setState({ open: false });
        console.log("action",event.target.innerHTML);
        if(event.target.innerHTML==="Confirm Booking"){
            console.log("book flight add",this.state.username);
            API.book({amount:this.props.details[0].price,type:"Hotel",email:window.localStorage.getItem("username")})
        }
        //console.log(this.state.textFieldValue);
    };

    componentDidMount(){
        this.totalTime=(new Date).getTime();
    }

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

                            {this.props.details.map((hotel,index) =>

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