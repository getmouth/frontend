
export const validateEmail = (value) => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(value)
    ? 'Invalid email, please enter a valid email address'
    : !value 
    ? 'Email field should not be empty'
    : ''
);

export const validatePassword = (value) => (
    value && value.length < 8
    ? 'Password should be at least 8 characters long'
    : !value
    ? 'Password field should not be empty'
    : ''
)