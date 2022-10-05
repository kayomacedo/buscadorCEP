import React, { Component,useState} from 'react';



import {FiSearch} from "react-icons/fi"

import "../src/style.css";


function App(){
  const [input, setInput] = useState(null);


  function handleSearch(event){
    alert("Valor do input "+input)
  }



  return (
 
      
      <div className="container">
       <h1 className="title">Buscador</h1>

       <div className="containerInput">
        <input 
        type= "text"
        placeholder="Digite seu CEP"
        value = {input}
        onChange={(e)=>(e.target.value)}
        

        
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch
            size = {25} 
            color="#FFF"
          />
        </button>


        </div>

        <main className="main">
          <h2> CEP: 2222</h2>
          <span>Rua: RuaTeste 123</span>
          <span>Complemento: Algum Complemento</span>
          <span>Bairro: Bairro Rosa</span>
          <span>Estado : RJ</span>
        </main>

       
      </div>
    );
  
  
  }
export default App;

