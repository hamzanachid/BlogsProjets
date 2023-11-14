import { useState } from 'react'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] px-48'>
      <NavBar />
    </div>
      )
}

      export default App
