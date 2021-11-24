import Main from './components/Main';
import './App.scss';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-light bg-white mb-5">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 ms-4 h1">Desafiogram</span>
      </div>
    </nav>
      <Main />
    </div>
  );
}

export default App;
