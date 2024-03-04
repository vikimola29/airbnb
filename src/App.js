import {useState} from 'react'
import Navbar from "./component/Navbar";
import UpperMain from "./component/Upper_half";
import LowerMain from "./component/Lower_half";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Navbar/>
        <UpperMain/>
        <LowerMain/>
      </div>
  )
}

export default App

