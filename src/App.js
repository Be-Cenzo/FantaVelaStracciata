import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Articoli from './components/articoli';
import Articolo from './components/articolo';
import Footer from './components/footer';
import Classifica from './components/classifica';
import Sbancatotore from './components/sbancatotore';
import Squadre from './components/squadre';
import Squadra from './components/squadra';

function App() {
  return (
    <div className="wrapper">
      <Header/>
	    <div class="contenuto">
      <Router>
        <Route path="/" exact render={(props) => <Articoli />} />
        <Route path="/Articolo/:id" render={(props) => <Articolo />} />
        <Route path="/classifica" render={(props) => <Classifica />} />
        <Route path="/sbancatotore" render={(props) => <Sbancatotore />} />
        <Route path="/squadre" render={(props) => <Squadre />} />
        <Route path="/squadra/:nome" render={(props) => <Squadra />} />
      </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
