import React,{Component} from "react";

function PickBook (props) {

    function handleChange(e){
        props.changeOption(e.target.value);
    }

        return (<select onChange = {(e)=>{handleChange(e)}} id = 'bookselect'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
        </select>);
}

export default PickBook;