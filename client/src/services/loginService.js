import { baseUrl } from '../utils';


export const loginUser = async ({ email, password }) => {

    const response = await fetch(`${baseUrl}/api/login`, {
        method: 'POST',
        boby: JSON.stringify({ email, password })
    });
    const data = await response.json();

    return data;
}