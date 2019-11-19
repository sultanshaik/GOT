import React,{Component} from "react";
import axios from 'axios';

class ListofCharacters extends Component {

    constructor(){
        super();
        this.state = {characters : ['Jon','Ned'], count : 2};
    }

    componentDidMount(){
        this.setState({characters : []});
        this.fetchCharacterNames(this.props.id);
    }

    componentDidUpdate(prevProps){
        if(this.props.id!==prevProps.id){
            this.setState({count : ''});
            this.setState({characters : []});
            this.fetchCharacterNames(this.props.id)
        }
    }

    fetchCharacterNames(id){
        axios.get('https://anapioficeandfire.com/api/books/' + id).then((response)=>{
            let charactersList = response.data.characters;
            this.setState({count: charactersList.length});
            let characters = charactersList.map((character) =>{
                return axios.get(character)
            })
            Promise.all(characters).then((values)=>{
                this.setState({characters: values.map((value)=>value.data.name? value.data.name: value.date.aliases[0])})
            })

        }).catch((e)=>{
            console.log(e + 'Error struck');
        });
    }

    render(){
        return(
        <div>
        <h1>{this.state.count}</h1>
        {this.state.characters.map((x,index)=>{
            return <p key = {index}>{++index+'>' +x}</p>
        })}
        </div>
        );
    }
}

export default ListofCharacters;