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

    render() {
        return (
            <div>
                {this.state.start}-{this.state.end}
                <Range allowCross={false}  min={0}max={23}step={1}defaultValue={[0, 23]} onChange={this.handleTime.bind(this)} />
            </div>


        );
    }
}

export default FilterFlight;