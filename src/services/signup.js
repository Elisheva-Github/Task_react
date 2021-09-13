export const signupToServer = (name, id, email, password) => {
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            id,
            email,
            password
        })
    });
}