import React from 'react';
import './Recipe.scss';
import Heart from '../Icons/heart';
import Favourite from '../Icons/favourite';
import StartRating from '../Rating/StarRating';

const Recipe = ({ recipe, favourited, onFavourite, onRate }) => {

    const tempImage = 'https://img.hellofresh.com/ar_2:3,c_fill,f_auto,fl_lossy,q_auto,w_230/hellofresh_s3/image/5ecd4d622df2ac54db00c6d8-1d19611e.jpg'

    const setRating = (rating) => {
        const id = recipe.id;
        onRate({ id, rating })
    } 

    return (
    <div
        className="recipe"
        style={{backgroundImage: `url(${tempImage})`}}
    > 
           
            {
                favourited
                ? (
                    <div onClick={() => onFavourite(recipe.id)}>  
                        <Favourite />
                    </div>
                ) : (
                    <div onClick={() => onFavourite(recipe.id)}> 
                        <Heart />
                    </div>
                )
                
            }
           
           
            <div className="recipe-info">
                <div className="recipe-heading">
                    <h2>{recipe.name}</h2>
                    <div>{recipe.headline}</div>
                </div>
                <div className="recipe-more-info">
                    <StartRating
                        rated={recipe.rating}
                        onRate={setRating}
                        count={5}
                    />
                    <div>{recipe.rating}</div>
                    <div>{recipe.calories}</div>
                    <div>{recipe.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;