import React,{Component} from "react";

class PickBook extends Component {

    handleChange(e){
        this.props.changeOption(e.target.value);
    }


    render(){
        return <select onChange = {(e)=>{this.handleChange(e)}} id = 'bookselect'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            </select>;
    }
}

export default PickBook;