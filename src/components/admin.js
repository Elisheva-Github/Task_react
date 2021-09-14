
// import React from 'react';
// import { useHistory } from "react-router-dom";


// const Admin = (props) => {
//     const history = useHistory();

//     const newProduct = () => {
//         history.push("/newProduct");

//     }

//     return (
//         <div>
//             <button onClick={newProduct}>להוסיף </button>
//         </div>
//     )
// }
// export default Admin;
// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";


// const Admin = (props) => {

//     const history = useHistory();

//     const newProduct = () => {
//         history.push("/newProduct");
//     }

//     return (
//         <div>
//             <button onClick={newProduct}>  להוסיף מוצר</button>
//         </div>
//     )
// }
// export default Admin;

import React, { useState, useEffect } from 'react';
// import { postProductToServer } from '../../services/postProduct';
import { postProductToServer } from '../services/postProduct';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import UseUploadFile from './fileReader.js';
// import ' ../../style/newProduct.css';

const Admin = (props) => {
    // const dispatch = useDispatch();

    const [nameProduct, setNameProduct] = useState('');
    const { img, onfileChange } = UseUploadFile();
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);


    const history = useHistory();

    const postProduct = async (nameProduct, img, desc, price) => {

        let res = '';

          res = await postProductToServer(nameProduct, img, desc, price );

        console.log(res);
        alert("product send to server👍👍👍")
        history.push('/admin');
    }

    return (
        <>
            <Avatar>{props.fname && props.fname[0]}</Avatar>
            {/* <div class="all">
                <div className="aa ">הכנסת מוצר חדש</div>

                <input placeholder=" הכנס שם מוצר" className="a b"
                    value={nameProduct} onChange={(e) => {
                        console.log(e.target.value)
                        setNameProduct(e.target.value)
                    }}
                />



                <input type="file" className="a c" onChange={onfileChange}></input>

                <input placeholder=" הכנס הערה" className="a d"
                    value={desc} onChange={(e) => {
                        console.log(e.target.value)
                        setDesc(e.target.value)
                    }}
                />


                <input placeholder=" הכנס סכום " className="a e"
                    value={price} onChange={(e) => {
                        console.log(e.target.value)
                        setPrice(e.target.value)
                    }} />


                <button className="buttn" onClick={() => postProduct(nameProduct, file, desc, price)}>  הוספה   </button>

            </div> */}
            <div >
                <div >הכנסת מוצר חדש</div>

                <input placeholder=" הכנס שם מוצר"
                    value={nameProduct} onChange={(e) => {
                        console.log(e.target.value)
                        setNameProduct(e.target.value)
                    }}
                />



                <input type="file" onChange={onfileChange}></input>

                <input placeholder=" הכנס הערה"
                    value={desc} onChange={(e) => {
                        console.log(e.target.value)
                        setDesc(e.target.value)
                    }}
                />


                <input placeholder=" הכנס סכום "
                    value={price} onChange={(e) => {
                        console.log(e.target.value)
                        setPrice(e.target.value)
                    }} />


                <button onClick={() => postProduct(nameProduct, img, desc, price)}>  הוספה   </button>

            </div>
        </>)
}


// const mapStateToProps = (state) => {

//     return {

//         teacher: state.user?.user?.firstName,
//         subject: state.user?.user?.subject,
//         fname: state.user?.user?.firstName,

//     };
// };
// export default connect(mapStateToProps, {})(NewProduct);
export default Admin;