import { baseUrl } from '../utils';

export const getAllRecipes = async () => {
    const response = await fetch(`${baseUrl}/api/recipes`);
    const data = await response.json()

    return data;
};