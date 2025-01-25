import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Clocks from './clock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clocks />
  </StrictMode>,
)
