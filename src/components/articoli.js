import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../style/articoli.css";

const Articoli = () => {

    const [postList,setPostList]=useState([]);

    useEffect(()=>{
        fetch("/php/controller.php")
        .then(res => res.json())
        .then(json => setPostList(json));    
        /*setPostList([{"id":2,"titolo":"E per motivi tattici... e per motivi tecnici... KOULIBALY LO METTE DENTRO","testo":"Nonostante l'allenatore De Vito sia giunto fino al Giuseppe Meazza prendendo a KTM Edin Dzeko per avere una doppietta, non ha ottenuto i risultati che sperava.\nLa giornata inizia col botto per lio, gol e assist piovono dal cielo ma gli agli ulitmi attimi il difensore originario di Greco del Tufo, Kostas Manolas, si è messo scuorno di scendere in campo contro la Real Baia Domizia 18-46, consentendo a quest'ultima squadra di vincere con una zampata del capitone Kalidou Koulibaly. Dopo questa sconfitta la scalese decide di andare in ritiro, volo in partenza da S.Maria La Scala e diretto a Lourdes, per vivere l'eseperienza mistica rigenerativa e ritrovare la giusta armonia.","autore":"Peppe il Biondo","img":"https:\/\/i.ytimg.com\/vi\/Yw7ceVBqrmA\/maxresdefault.jpg","data":"2021-09-21"},
        {"id":1,"titolo":"No Ribery No Party... ah no!","testo":"Purtroppo anche questa settimana il tandem dei sogni","autore":"Peppe il Biondo","img":"https:\/\/i.ytimg.com\/vi\/Yw7ceVBqrmA\/maxresdefault.jpg","data":"2021-09-21"}])
    */},[]);

    useEffect(()=>{
        console.log(postList);
    },[postList]);

    if(postList === []){
        return(
            <div class="contenitore">
                <div className="container-articoli">
                    Caricamento...
                </div>
            </div>
        );
    }

    return(
        <div class="contenitore">
            <div class="titolo-pagina">Ultime News</div>
            <div className="container-articoli">
                {postList.map((articolo)=>{
            return (
                <Link  to={`/articolo/${articolo.id}`}>
                    <div className="articolo">
                        <div className="img-articolo">
                            <img src={articolo.img} alt="img"/>
                        </div>
                        <div className="info-articolo">
                            <div className="titolo-articolo">
                                {articolo.titolo}
                            </div>
                            <div className="autore-articolo">
                                {articolo.autore} | {articolo.data}
                            </div>
                        </div>
                    </div>
                </Link>
            );
            })}
            </div>
        </div>
    );
}

export default Articoli;