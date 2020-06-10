import React, { useState } from 'react';
import Star from '../Icons/star';
import './StarRating.scss';

const StarRating = ({ rated, count }) => {
    const [rating, setRating] = useState(null);
    const [hoverValue, setHoverValue] = useState(null);
    console.log(hoverValue)
    return (
        <div className="star-rating">
            {
                [...Array(5).keys()].map(key => {
                    const currentKey = key + 1;
                    return (
                        <span
                            className="star-span" 
                            onClick={() => setRating(currentKey)}
                            key={key}
                            onMouseEnter={() => setHoverValue(currentKey)}
                            onMouseLeave={() => setHoverValue(null)}
                        >
                            <Star
                                starClass={currentKey <= (hoverValue || rated) ? "gold": "grey"}
                            />
                        </span>
                    )
                })
            }
        </div>
    )
}

export default StarRating