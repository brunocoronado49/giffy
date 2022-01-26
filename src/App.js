import ListOfGifs from './components/Gif/ListOfGifs';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Results from './pages/Results/Results';
import { Route, Link } from 'wouter';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'braunny7', 
        work: true
      }
    }>
      <div className="App">
        <Nav/>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={Results} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
