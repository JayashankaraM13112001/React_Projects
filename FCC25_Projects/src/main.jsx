import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './components/star-rating/StarRating'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating noOfStars={10} />
  </StrictMode>,
)
