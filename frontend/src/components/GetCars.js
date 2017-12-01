import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';
import BookCar from './BookCar';
import FilterCar from './FilterCar';
import {insertActivity} from "../api/API";


class GetCars extends Component {

    state= {
        Cars: []
    };

    componentWillMount(){
        API.getCars(this.props.searchCriteria)
            .then(res => {
                res.data.map((val)=> {
                    val.display=true; //for filter
                });
                this.setState({Cars:res.data});
            });
    }

    componentDidMount(){
        this.totalTime=(new Date).getTime();
        API.log({page:"SearchCars"});
    };


    componentWillUnmount() {
        var node= {
            username: localStorage.getItem("username"),
            data: {
                pageName: "SearchCars",
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

    }


    handleRange(range){
        let modifySearch =this.state.Cars;// this.state.displayResults;
        let tempStore=[];
        localStorage.removeItem("range");
        localStorage.setItem("range",range);
        if(modifySearch!==null){
            let index = modifySearch.findIndex((res)=>{
                switch(range){
                    case 'Any':
                        res.display=true;
                        tempStore.push(res);
                        break;
                    case '0-50':
                        if(res.price >=0 && res.price<=50 ){
                            res.display=true;
                            tempStore.push(res);
                        }
                        else{
                            res.display=false;
                            tempStore.push(res);
                        }
                        break;
                    case '0-100':
                        if(res.price >=0 && res.price<=100 ){
                            res.display=true;
                            tempStore.push(res);
                        }
                        else{
                            res.display=false;
                            tempStore.push(res);
                        }
                        break;
                    case '100-200':
                        if(res.price >=100 && res.price<=200 ){
                            res.display=true;
                            tempStore.push(res);
                        }
                        else{
                            res.display=false;
                            tempStore.push(res);
                        }
                        break;
                    case '200-300':
                        if(res.price >=200 && res.price<=300 ){
                            res.display=true;
                            tempStore.push(res);
                        }
                        else{
                            res.display=false;
                            tempStore.push(res);
                        }
                        break;
                    case '300-400':
                        if(res.price >=300 && res.price<=400  ){
                            res.display=true;
                            tempStore.push(res);
                        }
                        else{
                            res.display=false;
                            tempStore.push(res);
                        }
                        break;
                    case '400-500':
                        if(res.price >=400 && res.price<=500 ){
                            res.display=true;
                            tempStore.push(res);
                        }
                        else{
                            res.display=false;
                            tempStore.push(res);
                        }
                        break;

                }
            });
            this.setState({Cars:tempStore});

            tempStore=[];

        }
    }

    handleCarStatus(vals){
        let modifySearch = this.state.Cars;
        let tempStore=[];
        if(modifySearch!=null){
            let index = modifySearch.findIndex((res)=>{

                switch(res.car_type){
                    case "Small":
                        if(vals[0].Small==true){
                            res.display = true;
                            tempStore.push(res);
                        }
                        else{
                            res.display = false;
                            tempStore.push(res);
                        }
                        break;
                    case "Medium":
                        if(vals[0].Medium==true){
                            res.display = true;
                            tempStore.push(res);
                        }
                        else{
                            res.display = false;
                            tempStore.push(res);
                        }
                        break;
                    case "Large":
                        if(vals[0].Large==true){
                            res.display = true;
                            tempStore.push(res);
                        }
                        else{
                            res.display = false;
                            tempStore.push(res);
                        }
                        break;
                    case "SUV":
                        if(vals[0].SUV==true){
                            res.display = true;
                            tempStore.push(res);
                        }
                        else{
                            res.display = false;
                            tempStore.push(res);
                        }

                        break;
                    case "Van":

                        if(vals[0].Van==true){
                            res.display = true;
                            tempStore.push(res);
                        }
                        else{
                            res.display = false;
                            tempStore.push(res);
                        }
                        break;
                }
            });
            this.setState({Cars:tempStore});
            tempStore=[];
        }
    }

    render() {


        let searchRes;

        if(this.state.Cars!=null) {
            searchRes = this.state.Cars.map((car) => {
                if (car.display === true) {
                    return (
                        <tr className="row"   key={car.car_id}>

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
                                {this.props.isLoggedIn?<BookCar details={[car]}/>:""}

                            </td>
                        </tr>



                    )
                }
            });
        }
                    return (


            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")} />
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <div style={{"marginLeft":"200px"}}>
                        <Nav  isLoggedIn={this.props.isLoggedIn} route={this.props.route} handleLogin={this.props.handleLogin}/>
                    </div>
                    <div className="row">
                        <div className="col-md-2">

                            <FilterCar carStatus={this.handleCarStatus.bind(this)} priceFilter={this.handleRange.bind(this)} style={{"marginLeft":""}}/>
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

                                    {searchRes}

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