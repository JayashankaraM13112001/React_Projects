import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DigitalClock  from './clock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalClock />
  </StrictMode>,
)
