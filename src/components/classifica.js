import React from 'react';
import "../style/classifica.css";

const Classifica = () => {
    return(
        <div className="classifica-container">
            <div class="titolo-pagina">La Classifica</div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Squadra</th>
                    <th>Punti</th>
                    <th>Punti totali</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Real Baia Domizia 18-46</td>
                    <td>6</td>
                    <td>161.5</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Marekiaro</td>
                    <td>6</td>
                    <td>158</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>noName</td>
                    <td>4</td>
                    <td>157.5</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>C D Spiaze</td>
                    <td>2</td>
                    <td>151</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>AC CORT ANDO</td>
                    <td>1</td>
                    <td>137.5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Scalese</td>
                    <td>1</td>
                    <td>134</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sexy Gervinho</td>
                    <td>1</td>
                    <td>133</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Smells Like Teen Strinic</td>
                    <td>0</td>
                    <td>138.5</td>
                </tr>
            </table>
        </div>
    );
}

export default Classifica;