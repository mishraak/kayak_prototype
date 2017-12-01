import React, { Component } from 'react';

class FilterCar extends Component {

    constructor(){
        super();
        this.state = {
            cartypes:[]
        }
    }
    componentWillMount(){
        this.setState({
            cartypes:[
                {
                    Small:false,Medium:false,Large:false,SUV:false,Van:false
                }
            ]
        })
    }
    handleCheck(val){
        let checkedBoxState = this.state.cartypes;
        switch(val){
            case "Small":
                checkedBoxState[0].Small=!checkedBoxState[0].Small;
                this.setState({cartypes:checkedBoxState});
                break;
            case "Medium":
                checkedBoxState[0].Medium=!checkedBoxState[0].Medium;
                this.setState({cartypes:checkedBoxState});
                break;
            case "Large":
                checkedBoxState[0].Large=!checkedBoxState[0].Large;
                this.setState({cartypes:checkedBoxState});
                break;
            case "SUV":
                checkedBoxState[0].SUV=!checkedBoxState[0].SUV;
                this.setState({cartypes:checkedBoxState});
                break;
            case "Van":
                checkedBoxState[0].Van=!checkedBoxState[0].Van;
                this.setState({cartypes:checkedBoxState});
                break;
        }
        this.props.carStatus(this.state.cartypes);



        //cartypes.push(e.target.value);
    }
    priceSelected(e){
        console.log(e.target.value);
        this.props.priceFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <h4 style={{color:"white"}}>Filter by Car Type</h4>
                <div className="checkBox" style={{"display":"flex", "flexDirection":"row"}}><div className="checkBoxName">Small</div><input type="checkbox" onClick={this.handleCheck.bind(this,"Small")} className="checks" value="Small"/></div>
                <div className="checkBox" style={{"display":"flex", "flexDirection":"row"}}><div className="checkBoxName">Medium</div><input type="checkbox" onClick={this.handleCheck.bind(this,"Medium")} className="checks" value="Medium"/></div>
                <div className="checkBox" style={{"display":"flex", "flexDirection":"row"}}><div className="checkBoxName">Large</div><input type="checkbox" onClick={this.handleCheck.bind(this,"Large")} className="checks" value="Large"/></div>
                <div className="checkBox" style={{"display":"flex", "flexDirection":"row"}}><div className="checkBoxName">SUV</div><input type="checkbox" onClick={this.handleCheck.bind(this,"SUV")} className="checks" value="SUV"/></div>
                <div className="checkBox" style={{"display":"flex", "flexDirection":"row"}}><div className="checkBoxName">Van</div><input type="checkbox" onClick={this.handleCheck.bind(this,"Van")} className="checks" value="Van"/></div>
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

export default FilterCar;