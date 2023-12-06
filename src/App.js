import { useState } from 'react'
import Form from './Form'
import PackList from './PackList'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }
  return (
    <div className="App">
      <Form onAddItems={handleAddItems} />
      <PackList items={items} />
    </div>
  )
}

export default App
