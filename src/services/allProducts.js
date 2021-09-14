
export const getAllProductsFromServer = () => {
    return fetch(`http://localhost:3000/allProducts`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });
}
