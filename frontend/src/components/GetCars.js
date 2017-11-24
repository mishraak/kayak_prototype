import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';


class GetCars extends Component {

    state= {
        Cars: []
    };

    componentWillMount(){
        API.getCars(this.props.searchCriteria)
            .then(res => {
                this.setState({Cars:res.data});
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
                                <h4 className="text-center">{this.state.Cars.length} car(s) found</h4>
                                <table className="table table-striped">


                                    <tbody>
                                    <tr className="row"   >

                                        <td >
                                            Name
                                        </td>
                                        <td >
                                            Type
                                        </td>
                                        <td >
                                            Specifications
                                        </td>
                                        <td >
                                            Price
                                        </td>

                                    </tr>

                                    {this.state.Cars.map((car,index) =>

                                        <tr className="row" key={car}  >

                                            <td >
                                                {car.car_name}
                                            </td>
                                            <td >
                                                {car.car_type}
                                            </td>
                                            <td >
                                                {car.details}
                                            </td>

                                            <td >
                                                <b>${car.price}</b>
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

export default GetCars;