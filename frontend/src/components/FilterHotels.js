import React, { Component } from 'react';

class FilterHotels extends Component {
    valueSelected(e){
        this.props.ratingsFilter(e.target.value);
    }
    priceSelected(e){
        //console.log(e.target.value);
        this.props.priceFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <h4 style={{color:"white"}}>Filter by Stars</h4>
                <select className="filterPrice"  onChange={this.valueSelected.bind(this)}>

                    <option>Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <br/>

                <h4 style={{color:"white"}}>Filter by Price</h4>
                <select className="filterPrice" onChange={this.priceSelected.bind(this)}>

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

export default FilterHotels;