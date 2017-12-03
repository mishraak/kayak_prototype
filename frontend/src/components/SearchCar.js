import React, {Component} from 'react';
import * as API from '../api/API'
import Nav from './Nav'

class SearchCar extends Component {

    state={
        id:'',
        name:'',
        type:'',
        price:'',
        details:'',
        location:''
    };
    updateCarInfo = () => {
        var status;
        API.updateCars({
            car_id:this.state.id,
            car_name:this.state.name,
            car_type:this.state.type,
            price:this.state.price,
            details:this.state.details
        })
            .then((res) => {
                status = res.status;
                try{
                    return res;
                }
                catch(err){window.alert(`Some Error: ${err}`);}
            }).then((res) => {
            status = res.status;
            try{
                alert("Updated successfully");
            }
            catch(err){window.alert(`Some Error: ${err}`);}
        });
    };

    searchCar(){
        API.searchCar(this.state.id)
            .then((res) => {
                if (res.status === 201) {
                    try {
                        this.setState({
                            name: res.data[0].car_name,
                            type: res.data[0].car_type,
                            price: res.data[0].price,
                            details: res.data[0].details,
                            location: res.data[0].location

                        });
                    }
                    catch (err){
                        alert("It doesn't exist");
                    }
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
                                <button onClick={()=>{this.searchCar()}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Search car</button>

                            </div>
                            <div className="userDetails">
                                <div style={{"fontSize":"30px"}}>Listing Details
                                    <hr/>
                                </div>

                                <div className="formFormat" >
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Car Id</label> <input type='text' className="adminField" id='username' disabled value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Type</label><input type='text' className="adminField" id='password' value={this.state.type} onChange={e => this.setState({ type: e.target.value })} />
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Price</label><input type='text'  className="adminField" id='first_name' value={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}>Details </label> <input type='text'  className="adminField" id='last_name' value={this.state.details} onChange={e => this.setState({ details: e.target.value })}/>
                                    <br/>
                                    <label className="col-md-4" style={{"textAlign":"Right"}}> location </label><input type='text'  className="adminField" id='address' value={this.state.location} onChange={e => this.setState({ location: e.target.value })}/>

                                </div>
                                <div className='row' style={{"opacity":"1"}}>
                                    <button className='update-info' onClick={()=>this.updateCarInfo()}>Update Information</button>
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
                            <Nav />

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

export default SearchCar;