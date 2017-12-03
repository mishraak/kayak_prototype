import React, {Component} from 'react';
import * as API from '../api/API'
import Nav from './Nav'

class SearchHotel extends Component {

    state={
        id:'',
        name:'',
        address:'',
        rooms:'',
        stars:''
    };
    updateHotelInfo = () => {
        var status;

        API.updateHotels({
            hotel_id:this.state.id,
            hotel_name:this.state.name,
            address:this.state.address,
            rooms:this.state.rooms,
            stars:this.state.stars
        })
            .then((res) => {
                status = res.status;
                try{
                    alert("Updated successfully");
                }
                catch(err){window.alert(`Some Error: ${err}`);}
            });
    };

    searchHotel(){
        API.searchHotel(this.state.id)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({name:res.data[0].hotel_name,
                        address:res.data[0].address,
                        stars:res.data[0].stars,
                        rooms:res.data[0].rooms
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

                                <label className="col-md-4" style={{"textAlign":"Right"}}>Search Hotel</label> <input type='text' className="adminField" id='username' value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                                <button onClick={()=>{this.searchHotel()}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Search hotel</button>

                            </div>
                            <div className="userDetails">
                                <div style={{"fontSize":"30px"}}>Listing Details
                                    <hr/>
                                </div>

                                <div className="formFormat" >
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>HotelId</label> <input type='text' className="adminField" id='username' disabled value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Name</label><input type='text' className="adminField" id='password' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Address</label><input type='text'  className="adminField" id='first_name' value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Rooms </label> <input type='text'  className="adminField" id='last_name' value={this.state.rooms} onChange={e => this.setState({ rooms: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}> Stars </label><input type='text'  className="adminField" id='address' value={this.state.stars} onChange={e => this.setState({ stars: e.target.value })}/>

                                </div>
                                <div className='row' style={{"opacity":"1"}}>
                                    <button className='update-info' onClick={()=>this.updateHotelInfo()}>Update Information</button>
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

export default SearchHotel;