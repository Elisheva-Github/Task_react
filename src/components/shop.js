
import React, { useState, useEffect } from 'react';
import { getAllProductsFromServer } from '../services/allProducts';
import { useHistory } from "react-router-dom";


const Shop = (props) => {

    const [prods, setProds] = useState("");
    const history = useHistory();

    useEffect(async () => {
        getAllProductsFromServer().then((data) => {
            setProds(data)
        })
    }, [])

    const goToShoppingBag = () => {
        history.push("/shoppingBag");
    }

    return (
        <div>


            <button onClick={() => goToShoppingBag()}>  לסל שלך  </button>

        </div>
    )
}
export default Shop;