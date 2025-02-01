import PropTypes from 'prop-types'
import{FaStar} from 'react-icons/fa'
import './starrating.css'
import { useState } from 'react'

export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (index) => {
        setRating(index)
    }

    const handleMouseEnter = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }
    
    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    
                    return <FaStar
                        key={index}
                        className={ index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={50}
                    />
                })
            }
        </div>
    )
}

StarRating.propTypes = {
    noOfStars: PropTypes.number
};