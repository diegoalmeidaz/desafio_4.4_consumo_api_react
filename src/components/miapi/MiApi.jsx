import { useEffect, useState } from "react";
import Card from '../card/Card'
import Search from "../search/Search";




function MiApi () {
    
    const[characters, setCharacters] = useState([]);
    const[search, setSearch] = useState("");

    const urlInicial = "https://rickandmortyapi.com/api/character";

    const getCharacters = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {setCharacters(data.results)})
        .catch(error => console.log (error));
       
        
    };
    

    useEffect(() => {
        getCharacters(urlInicial);
    })

    
    

    
    return(
        
        <div className="Container">
        
            <Search setSearch={setSearch} />

             <Card characters={characters} search={search}/>
        </div>
    )
}

export default MiApi