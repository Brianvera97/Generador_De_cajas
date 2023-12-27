
import { useState } from 'react';
import './App.css';
import BoxGenerator from './Components/BoxGenerator/BoxGenerator';




// imports omitidos por brevedad
function App() {

  const [color, setColor] = useState("")
  const [boxes, setBoxes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setColor("")

    setBoxes((prev) => {
      prev.push({ color: color })
      return [...prev]
    })
  }

  return (
    <div className='App'>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colorIpt">Color</label>
          <input type="color" name='color' id='colorIpt' value={color} onChange={(e) => setColor(e.target.value)} />
          <input type="text" name='colorTxt' id='colorTxtIpt'  value={color} />
        </div>
        <button type='submit'>Crear </button>
      </form>

      <div className='Container'>
        {
          boxes.map((item, idx) => {
            return (
              <BoxGenerator key={idx} color={item.color} />)
          })
        }
      </div>

    </div>
  );
}



export default App;


