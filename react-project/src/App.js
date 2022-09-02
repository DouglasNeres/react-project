import {useState} from "react";
import './App.css';
import Saudacao from "./components/Saudacao";
import SeuNome from "./components/SeuNome";

function App() {
  /* const meusItens = ['React', 'Vue', 'Angular'] */
  const [nome, setNome] = useState() 
  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome ={setNome}/>
      <Saudacao nome = {nome}/>
{/*       <ListaDois itens = {meusItens}/>
      <ListaDois itens = {[]}/> */}
    </div>
  );
}

export default App;
