import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './components/hello-world';
import { PokeApi } from './components/pokeApi';

const galacticVariable = {
  ultimateTruth: 'Meg Myers'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* < HelloWorld ultimateTruth={galacticVariable.ultimateTruth} /> */}
        < PokeApi />
        <p>
          Having to start over is no fun.  But it's better than giving up
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
