import React,{Component} from "react";
import ReactDOM from "react-dom";
import ListofCharacters from "./Components/ListofCharacters";
import PickBook from "./Components/PickBook";

class App extends Component{

  constructor(){
    super();
    this.changeOption = this.changeOption.bind(this);
    this.state = {id : 1}
  }

  changeOption(d){
    this.setState({id : d});
  }

  render(){
    return (<div><PickBook changeOption ={this.changeOption} /><ListofCharacters bookId = {this.state.id}/></div>);
  }
}

ReactDOM.render(<App />, document.getElementById("index"));
