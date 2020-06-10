import React from 'react';

const Recipe = ({ recipe }) => {
    //TODO: pass down props to render

    return (
        <div className="recipe">
            <div>{recipe.name}</div>
        </div>
    );
}

export default Recipe;