import { useState } from 'react'
import { PageBoard } from './components/PageBoardInfo'
import './App.css'
import events from'./upcoming-events.json'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ul>
    {events.map((eve))}
    
   </ul>
  )
}

export default App
