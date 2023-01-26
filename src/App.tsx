import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UploadPage from './pages/UploadPage'
import FileProvider from './context/file'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FileProvider>
      <UploadPage />
    </FileProvider>
  )
}

export default App
