import { baseUrl } from '../utils';


export const loginUser = async ({ email, password }) => {

    const response = await fetch(`${baseUrl}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let data;
    if(response.ok) {
        data = await response.json();
    } else {
        const body = await response.json();
        throw new Error(body.error)
    }
    
    return data;
}