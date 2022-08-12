import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  let name = 'Douglas'
  let age = 17
  let NewName = name.toUpperCase()

  function sum(x, y) {
      return x + y
  }
 
  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">{/* 
      <h1>Hello World in React!</h1>
      <p><u>Dev Web</u></p>
      <h4>My First Project</h4>
      <p><u>JSX</u></p>
      <p>Welcome {name}!</p>
      <p>Sua idade é {age}</p>
      <p>Novo Nome é {NewName}</p>
      <h3>Result Cálc {2+8*2}</h3>
      <h3>{sum(15,5)}</h3>
      <img src= {url} alt ="My Image"/> */}
      <HelloWorld/>
      <SayMyName nome = "Developer"/>
      <SayMyName nome = "Enginner"/>
      <SayMyName nome = {name} />
      <Pessoa nome = "Neres"
      idade = "17"
      profissao = "Dev"
      foto = "https://via.placeholder.com/150"
      />

    </div>
  );
}

export default App;
