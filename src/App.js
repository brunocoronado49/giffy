import ListOfGifs from './components/Gif/ListOfGifs';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Results from './pages/Results/Results';
import { Route, Link } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Nav/>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={Results} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
