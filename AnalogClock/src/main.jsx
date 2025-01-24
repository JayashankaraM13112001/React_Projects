import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnalogClcok from './clock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnalogClcok />
  </StrictMode>,
)
