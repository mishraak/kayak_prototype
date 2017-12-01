import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class FilterFlight extends Component {

    state={
        depstart:0,
        depend:0,
        arrstart:0,
        arrend:0
    };
    handleDepTime(val){
        this.setState({depstart:val[0],depend:val[1]});
        this.props.dep(val);

    }

    handleArrTime(val){
        this.setState({arrstart:val[0],arrend:val[1]});
        this.props.arr(val);

    }

    priceSelected(e){
        //console.log(e.target.value);
        this.props.priceFilter(e.target.value);
    }

    render() {
        return (
            <div>
                <h4 style={{color:"white"}}>Filter by Time</h4>
                <div className="timeFilter">
                    <h5 style={{color:"white"}}>Departure</h5>
                  {this.state.depstart}:00hrs -{this.state.depend}:00 hrs</div>
                <Range allowCross={false}  min={0} max={23} step={1} defaultValue={[0, 23]} onChange={this.handleDepTime.bind(this)} style={{marginLeft:"10px"}}/>
                <br/>
                <div className="timeFilter">
                    <h5 style={{color:"white"}}>Arrival</h5>
                    {this.state.arrstart}:00hrs -{this.state.arrend}:00 hrs</div>
                <Range allowCross={false}  min={0} max={23} step={1} defaultValue={[0, 23]} onChange={this.handleArrTime.bind(this)} style={{marginLeft:"10px"}}/>
                <br/>
                <h4 style={{color:"white"}}>Filter by Price</h4>
                <select className="filterPrice" onChange={this.priceSelected.bind(this)} style={{marginTop:"10px"}}>

                    <option>Any</option>
                    <option>0-50</option>
                    <option>0-100</option>
                    <option>100-200</option>
                    <option>200-300</option>
                    <option>300-400</option>
                    <option>400-500</option>
                </select>
            </div>


        );
    }
}

export default FilterFlight;