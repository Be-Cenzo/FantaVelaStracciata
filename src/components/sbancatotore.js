import React from 'react';
import {useState,useEffect} from 'react';
import "../style/sbancatotore.css";

const Sbancatotore = () => {
    const [bolletta,setBolletta]=useState("");

    const quinta = [{"giornata":5,"casa":"Atalanta","fuori":"Sassuolo","risultato":"1x + Gol"},{"giornata":5,"casa":"Fiorentina","fuori":"Inter","risultato":"2"},{"giornata":5,"casa":"Salernitana","fuori":"Hellas Verona","risultato":"x"},{"giornata":5,"casa":"Spezia","fuori":"Juventus","risultato":"2 + Gol"},{"giornata":5,"casa":"Cagliari","fuori":"Empoli","risultato":"Gol + Over 2.5"},{"giornata":5,"casa":"Milan","fuori":"Venezia","risultato":"1 HH (0:2)"},{"giornata":5,"casa":"Sampdoria","fuori":"Napoli","risultato":"2 + Multigol 3-5"},{"giornata":5,"casa":"Torino","fuori":"Lazio","risultato":"2"},{"giornata":5,"casa":"Roma","fuori":"Udinese","risultato":"1x + Over 2.5"}];

    useEffect(()=>{
        fetch("/php/sbancatotore.php")
        .then(res => res.json())
        .then(json => setBolletta(json));    
    },[]);

    if(bolletta !== ""){
        return(
            <div className="sbanca-container">
                <div class="titolo-pagina">SBANCATOTORE</div>
                <div className="sbanca-titolo">
                    {bolletta[0].giornata} di Serie A
                </div>
                <div className="sbanca-partite">
                    <table>
                        <tr>
                            <th>Partita</th>
                            <th>Risultato</th>
                        </tr>
                        {bolletta.map((partita)=>{
                    return (
                        <tr>
                            <td>
                                <div className="sbanca-squadre">
                                    {partita.casa} - {partita.fuori}
                                </div>
                            </td>
                            <td>
                                <div className="sbanca-risultato">
                                    {partita.risultato}
                                </div>
                            </td>
                        </tr>
                    );
                    })}
                    </table>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="sbanca-container">
                <div class="titolo-pagina">SBANCATOTORE</div>
                <div class="caricamento">Caricamento...</div>
            </div>
        );
    }
}

export default Sbancatotore;