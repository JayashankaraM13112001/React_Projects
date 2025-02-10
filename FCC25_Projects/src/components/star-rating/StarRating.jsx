import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import './starrating.css';
import { useState, useCallback } from 'react';

export default function StarRating({ noOfStars = 10 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = useCallback((index) => {
        setRating(index);
    }, []);

    const handleMouseEnter = useCallback((index) => {
        setHover(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHover(rating);
    }, [rating]);

    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, i) => {
                const index = i + 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={50}
                        role="button"
                        aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
                        tabIndex={0}
                    />
                );
            })}
        </div>
    );
}

StarRating.propTypes = {
    noOfStars: PropTypes.number
};
