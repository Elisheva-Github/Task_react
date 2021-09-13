export const loginToServer = (user, password) => {
    debugger
    return fetch(`http://localhost:3000/login?user=${user}&password=${password}`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
}
     )
    .catch((err) => {
      console.log("error", err);
    });
}