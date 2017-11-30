import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class FilterFlight extends Component {

    state={
        start:0,
        end:0
    };
    handleTime(val){
        this.setState({start:val[0],end:val[1]});
        this.props.rangeVal(val);

    }

    priceSelected(e){
        //console.log(e.target.value);
        this.props.priceFilter(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="timeFilter">
                  Dptr:{this.state.start}:00   -  Arvl:{this.state.end}:00 hrs</div>
                <Range allowCross={false}  min={0} max={23} step={1} defaultValue={[0, 23]} onChange={this.handleTime.bind(this)} style={{marginLeft:"10px"}}/>
                <br/>
                <select className="filterPrice" onChange={this.priceSelected.bind(this)} style={{marginTop:"10px"}}>
                    <option value="" disabled selected>Price</option>
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