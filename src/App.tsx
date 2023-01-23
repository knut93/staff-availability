import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UploadPage from './pages/UploadPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UploadPage />
    </div>
  )
}

export default App
