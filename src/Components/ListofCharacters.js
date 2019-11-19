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
            charactersList.map((character) =>{
                axios.get(character).then((response)=>{
                    if(response.data.name==='')
                    this.setState({characters : [...this.state.characters , response.data.aliases[0]]});
                    else
                    this.setState({characters : [...this.state.characters , response.data.name]});
                })
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