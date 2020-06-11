import React from 'react';
import './Recipe.scss';
import Heart from '../Icons/heart';
import Favourite from '../Icons/favourite';
import StartRating from '../Rating/StarRating';

const tempUrl = 'https://img.hellofresh.com/ar_2:3,c_fill,f_auto,fl_lossy,q_auto,w_230/hellofresh_s3/image/'

const Recipe = ({ recipe, favourited, onFavourite, onRate }) => {

    const setRating = (rating) => {
        const id = recipe.id;
        onRate({ id, rating })
    } 
 
    return (
    <div
        className="recipe"
        style={{backgroundImage: `url(${tempUrl}${recipe.id}.jpg)`}}
    > 
           
            {
                favourited
                ? (
                    <div className="favorite">
                        <span onClick={() => onFavourite(recipe.id)}>
                            <Favourite />
                        </span>
                    </div>
                ) : (
                    <div className="favorite"> 
                        <span onClick={() => onFavourite(recipe.id)}>
                            <Heart />
                        </span>
                    </div>
                )
                
            }
           
           
            <div className="recipe-info">
                <div className="recipe-heading">
                    <h2>{recipe.name}</h2>
                    <div>{recipe.headline}</div>
                </div>
                <div className="recipe-more-info">
                    
                    <div className="recipe-rating">
                        <StartRating
                            rated={recipe.rating}
                            onRate={setRating}
                            count={5}
                        />
                        {recipe.rating}
                    </div>
                    <div>{recipe.calories}</div>
                    <div>{recipe.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;