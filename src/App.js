import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App React Giffy</h1>
        <Link to="/resident+evil">Resident Evil</Link>
        <Link to="/cyberpunk+2077">Cyberpunk 2077</Link>
        <Link to="/halo">Halo</Link>
        <Link to="/doom">Doom</Link>
        <Route path="/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
