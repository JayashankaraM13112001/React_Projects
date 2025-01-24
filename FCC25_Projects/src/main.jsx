import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accordion from './components/accordion/accordion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
)
