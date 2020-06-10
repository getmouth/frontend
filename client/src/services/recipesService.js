import { baseUrl } from '../utils';

export const getAllRecipes = async () => {
    const response = await fetch(`${baseUrl}/api/recipes`);

    let data;
    if(response.ok) {
        data = await response.json()
    } else {
        const body = await response.json();
        throw new Error(body.error)
    }
    
    return data;
};