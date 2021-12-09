import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import myVar from './components/Vars';
import * as myImportsObjects from './components/ExportSomeVars';
import TodayTime from './components/TodayTime';

function App() {
  console.log(myVar());
  console.log(myImportsObjects.bar);
  const myChildren = ['Omri ', 'Kfir ', 'Daniel ', 'Michal '];
  const name = `david`;
  const fathers = ['Avraham', 'Itzhak', 'Yaakov'];
  const listItems = fathers.map((father, index) =>
    <li key={index} >
      {father}
    </li>
  );
  const yourChildren = [<li>david</li>, <li>rivi</li>, <li>mali</li>, <li>Michal</li>];

  const items = [];
  for (let i = 10; i > 0; i--) {
    items.push(<li key={i}>{i}</li>)
  }
const user = {
name: 'Ran',
lastName: 'Bar-Zik',
city: 'Petah Tiqwa',
id: '666',
};

  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {name}
      <TodayTime />
      <p>Edit<code>src/App.js</code> and save to reload. </p>
      <Greeting />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Learn React
      </a>
      <p>{myChildren.map(child => <span>{child}</span>)}
        <ul>{yourChildren}</ul>
        <ul>{listItems}</ul>
        <ul>{items}</ul>
      </p>

    </header>

  </div>;


};
export default App;
