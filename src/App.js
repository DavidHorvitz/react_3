import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import myVar from './components/Vars';
import * as myImportsObjects from './components/ExportSomeVars';

function App() {
  console.log(myVar());
  console.log(myImportsObjects.bar);
  const myChildren = ['Omri ', 'Kfir ', 'Daniel ', 'Michal '];
  const name = `david`;
  const yourChildren = [<li>david</li>, <li>rivi</li>, <li>mali</li>, <li>Michal</li>]
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {name}
      <p>Edit<code>src/App.js</code> and save to reload. </p>
      <Greeting />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Learn React
      </a>
      <p>{myChildren.map(child => <span>{child}</span>)}<ul>asdf{yourChildren}</ul></p>

    </header>

  </div>;


};
export default App;
