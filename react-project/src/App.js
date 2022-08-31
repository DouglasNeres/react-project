import './App.css';
import ListaDois from './components/ListaDois';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <ListaDois itens = {meusItens}/>
      <ListaDois itens = {[]}/>
    </div>
  );
}

export default App;
