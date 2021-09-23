import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import "../style/articolo.css";

const Articolo = (props) => {
    
    const [articolo,setArticolo] = useState();

    const { id } = useParams();

    const prova = {autore: "Pepp o Biond",
                    data: "2021-09-21",
                    id: 2,
                    img: "https:\/\/i.ytimg.com\/vi\/Yw7ceVBqrmA\/maxresdefault.jpg",
                    testo: "Nonostante l'allenatore De Vito sia giunto fino al Giuseppe Meazza prendendo a KTM Edin Dzeko per avere una doppietta, non ha ottenuto i risultati che sperava.\\nLa giornata inizia col botto per lio, gol e assist piovono dal cielo ma gli agli ulitmi attimi il difensore originario di Greco del Tufo, Kostas Manolas, si è messo scuorno di scendere in campo contro la Real Baia Domizia 18-46, consentendo a quest'ultima squadra di vincere con una zampata del capitone Kalidou Koulibaly. Dopo questa sconfitta la scalese decide di andare in ritiro, volo in partenza da S.Maria La Scala e diretto a Lourdes, per vivere l'eseperienza mistica rigenerativa e ritrovare la giusta armonia.",
                    titolo: "E per motivi tattici... e per motivi tecnici... KOULIBALY LO METTE DENTRO"}

    useEffect(()=>{
        fetch("/php/articolo.php?id=" + id)
        .then(res => res.json())
        .then(json => setArticolo(json));
    },[]);

    useEffect(()=>{
        console.log(articolo);
    },[articolo]);

    if(articolo !== undefined){
        if(articolo.codice === undefined){
            return(
                <div className="articolopage-container">
                    <div className="articolopage-titolo">
                        {articolo.titolo}
                    </div>
                    <div className="articolopage-autore">
                        {articolo.autore} | {articolo.data}
                    </div>
                    <div className="articolopage-img">
                        <img src={articolo.img} alt="img"/>
                    </div>
                    <div className="articolopage-testo">
                        {articolo.testo}
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

export default Articolo;