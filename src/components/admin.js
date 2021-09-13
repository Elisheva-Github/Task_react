
import React from 'react';
import { useHistory } from "react-router-dom";


const admin = (props) => {

const newProduct=()=>{
    history.push("/newProduct");

}

    return(
        <div>
            <button onClick={newProduct}>להוסיף </button>
        </div>
    )
}
export default admin;