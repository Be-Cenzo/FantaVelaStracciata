import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import "../style/articolo.css";

const Squadra = (props) => {
    
    const [squadra, setSquadra] = useState();
    const [anno, setAnno] = useState("2021");

    const { nome } = useParams();

    useEffect(()=>{
        fetch("/php/squadra.php?nome=" + nome + "&anno=" + anno)
        .then(res => res.json())
        .then(json => setSquadra(json));
    },[]);

    useEffect(()=>{
        console.log(squadra);
    },[squadra]);

    if(squadra !== undefined){
        if(squadra.codice === undefined){
            return(
                <div className="articolopage-container">
                    <div className="articolopage-titolo">
                        {squadra.nome}
                    </div>
                    <div className="articolopage-img">
                        <img src={"/img/" + squadra.img} alt="img"/>
                    </div>
                    <div className="articolopage-titolo">
                        {squadra.titolo}
                    </div>
                    <div className="articolopage-autore">
                        {squadra.autore} | {squadra.data}
                    </div>
                    <div className="articolopage-testo">
                        {squadra.testo}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="articolopage-container">
                    <div className="articolopage-testo">
                        Oh no! quello che cerchi qui non c'è, puoi trovarlo nel tuo cuore!
                    </div>
                </div>
            );
        }
    }

    return(
        <div className="caricamento">Caricamento...</div>
    );
}

export default Squadra;