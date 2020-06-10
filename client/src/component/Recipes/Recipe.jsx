import React from 'react';
import './Recipe.scss';

const Recipe = ({ recipe }) => {
    //TODO: pass down props to render
    console.log(recipe)
    const tempImage = 'https://img.hellofresh.com/ar_2:3,c_fill,f_auto,fl_lossy,q_auto,w_230/hellofresh_s3/image/5ecd4d622df2ac54db00c6d8-1d19611e.jpg'
    return (
    <div className="recipe" style={{backgroundImage: `url(${tempImage})`}}> 
            {/* <div style={{width: '100%'}}>
                <img  src={tempImage} alt={recipe.headline} />
            </div> */}
            <div className="recipe-info">
                <div className="recipe-heading">
                    <h2>{recipe.name}</h2>
                    <div>{recipe.headline}</div>
                </div>
                <div className="recipe-more-info">
                    <div>{recipe.rating}</div>
                    <div>{recipe.calories}</div>
                    <div>{recipe.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;