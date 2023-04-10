import { useState } from 'react'
import UserList from './Components/usersList'

function App() {
  const [count, setCount] = useState(0)
  return <div className='container mx-auto'><UserList /></div>


}

export default App
