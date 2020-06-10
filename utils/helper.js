const correctEmail = (value) => (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(value)
  
);

module.exports = {
    correctEmail
}