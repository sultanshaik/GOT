import React from "react";
import {useState,useEffect} from 'react';
import axios from 'axios';

function ListofCharacters (props) {

    let initialState = ['Jon', 'Dany'];
    const [characters, setCharacters] = useState(initialState);
    const [count,setCount] = useState(2);

    useEffect(() => {
        fetchCharacters();
     },[props.bookId]);


    function fetchCharacters(){
        axios.get('https://anapioficeandfire.com/api/books/' + props.bookId)
        .then((response)=>{
            let charactersList  = response.data.characters;
            let characters = charactersList.map((character)=>{
                return axios.get(character);
            })
            Promise.all(characters)
            .then(values=>{
                let characterNames = values.map((value)=>{
                    return  value.data.name? value.data.name:value.data.aliases[0]
                })
                setCharacters(characterNames);
                setCount(values.length);
            })
        });
    }

    return(
        <div>
        <h1>{count}</h1>
        <ol>
            {characters.map((character,index)=><li key={index}>{character}</li>)}</ol>
        </div>
        );
}

export default ListofCharacters;