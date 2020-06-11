import React, { useState } from 'react';
import Star from '../Icons/star';
import './StarRating.scss';

const StarRating = ({ rated, count, onRate }) => {

    const [rating, setRating] = useState(null);
  
    return (
        <div className="star-rating">
            {
                [...Array(count).keys()].map(key => {
                    const currentKey = key + 1;
                    return (
                        <span
                            className="star-span" 
                            onClick={() => onRate(rating)}
                            key={key}
                            onMouseEnter={() => setRating(currentKey)}
                            onMouseLeave={() => setRating(null)}
                        >
                            <Star
                                starClass={currentKey <= (rating || rated) ? "gold": "grey"}
                            />
                        </span>
                    )
                })
            }
        </div>
    )
}

export default StarRating