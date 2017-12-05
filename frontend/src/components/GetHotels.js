import React, {Component} from 'react';
import Nav from './Nav';
import * as API from '../api/API';
import BookHotel from './BookHotel';
import FilterHotels from './FilterHotels';



class GetHotels extends Component {

    state= {
        Hotels: [],
        displayResults:[]
    };

    componentWillMount(){
        API.getHotels(this.props.searchCriteria)
            .then(res => {
                res.data.map((val)=> {
                val.display=true; //for filter
                });
                this.setState({Hotels:res.data});
                this.setState({displayResults:res.data});
                console.log("this is the result");
                console.log(this.state.Hotels);
                localStorage.setItem("hotels", JSON.stringify(this.state.Hotels));
            });

        //console.log(this.state.Hotels);

    }

    componentDidMount(){
        API.log({page:"SearchHotels"});
        this.totalTime=(new Date).getTime();


    }

    componentWillUnmount() {
        var node= {
            username: localStorage.getItem("username"),
            data: {
                pageName: "SearchHotels",
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



    handleRating(stars){
        localStorage.removeItem("stars");
        localStorage.setItem("stars",stars);
        console.log(stars);

        let modifySearch = JSON.parse(localStorage.getItem("hotels"));//this.state.displayResults;

        let tempStore=[];
        if(modifySearch!=null){
            let index = modifySearch.findIndex((res)=>{
                if(stars==='Any' ){


                    res.display = true;
                    tempStore.push(res);
                }
                else
                if(res.stars!=stars && stars!=='Any'){

                    res.display = false;
                    tempStore.push(res);
                }

                else{

                    res.display = true;
                    tempStore.push(res);
                }

            });
        }

        this.setState({displayResults:tempStore});
        tempStore=[];

    }

    handleRange(range){
        let modifySearch =this.state.displayResults;// this.state.displayResults;
        let tempStore=[];
        localStorage.removeItem("range");
        localStorage.setItem("range",range);
        if(modifySearch!=null){
            let index = modifySearch.findIndex((res)=>{
                switch(range){
                    case 'Any':
                        res.display=true;
                        tempStore.push(res);
                        break;
                    case '0-50':
                        if(res.price >=0 && res.price<=50){
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
            this.setState({displayResults:tempStore});

            tempStore=[];

        }
    }

    render() {
        let searchRes;
        console.log('display the state');
        console.log(this.state.displayResults);
        if(this.state.displayResults!=null){
            searchRes=this.state.displayResults.map((hotel)=>{
                if(hotel.display===true){
                    console.log("i was called because hotel.display is true");
return(
                    <tr className="row" key={hotel.hotel_name+hotel.room_type}  >

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
                            {this.props.isLoggedIn?<BookHotel details={[hotel]}/>:""}

                        </td>
                    </tr>)
                }
            });


        }

        return (

            <div style={{"display":"flex", "flexDirection":"row","minwidth": "1000px"}}>

                <img src={require("../images/phoenix.png")}/>
                <div style={{"position":"absolute","zIndex":"10", "margin":"auto","width": "100%","padding": "10px"}}>
                    <div style={{"marginLeft":"200px"}}>
                        <Nav  isLoggedIn={this.props.isLoggedIn} route={this.props.route} handleLogin={this.props.handleLogin}/>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <FilterHotels ratingsFilter={this.handleRating.bind(this)} priceFilter={this.handleRange.bind(this)}/>
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
                                    {searchRes}
                                    {/*{this.state.Hotels.map((hotel,index) =>*/}

                                    {/*)}*/}



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