import { baseUrl } from '../utils';
const recipeUrl = `${baseUrl}/api/recipes`;

export const getAllRecipes = async () => {
    const response = await fetch(recipeUrl);

    let data;
    if(response.ok) {
        data = await response.json()
    } else {
        const body = await response.json();
        throw new Error(body.error)
    }
    
    return data;
};

export const rateRecipeById = async ({ id, rating, token }) => {
    const response = await fetch(recipeUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ id, rating })
    });

    let data;
    if(response.ok) {
        data = await response.json();
    } else {
        const body = await response.json();
        throw new Error(body.error);
    }

    return data;
}
