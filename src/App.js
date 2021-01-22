import { useRef } from 'react'
import './App.css';
import DynamicText from './component.js/DynamicText.js'

function App() {
  const dynamicTextRef = useRef(null)
  return (
    <div className="App">
      <input onChange={(event) => {
        dynamicTextRef.current.updateText(event.target.value)
      }}/>
      <DynamicText ref={dynamicTextRef}/>
    </div>
  );
}

export default App;
