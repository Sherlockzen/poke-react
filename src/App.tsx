import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Regions from './selectComp';
import PokeList from './pokeList';

const paginate = (num: number, arr: any[]) => {
    const start = num * 5;
    return arr.slice(start, start + 5)
};

function App() {
  const [change, setChange] = useState('generation-i')
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Escolha a geração pokemon desejada:</h2>
        <select
            value={change}
            onChange={(e) => setChange(e.target.value)}
        >
            <Regions />
        </select>

        <PokeList gene={change}/>

      </div>
    </div>
  )
}

export default App
