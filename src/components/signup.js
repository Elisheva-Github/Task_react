import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import { connect, useDispatch } from "react-redux";
// import { saveUser } from "../action";
import { signupToServer } from '../services/signup';
// import '../style/signup.css';

const Signup = (props) => {
    let history = useHistory();
    // const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signup = async (name, id, email, password) => {
        try {

            const ress = await signupToServer(name, id, email, password);
            console.log(ress);
            alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
            history.push("/");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }



    return (<div className="">



        <div >
            <div >

                <input type="text" id="firstName" name="firstName"
                    placeholder=":הכנס שם י"
                    value={name} onChange={(e) => {
                        console.log(e.target.value)
                        setName(e.target.value)
                    }} />

            </div>


            {/* id */}
            <div >

                <input type="text" id="id" name="id"
                    placeholder=":הכנס תז"
                    value={id} onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value)
                    }} />

            </div>

            {/* email */}
            <div >

                <input type="text" id="email" name="email"
                    placeholder=": הכנס דואר אלקטרוני"
                    value={email} onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                    }} />

            </div>

            {/* password */}
            <div  >
                <input type="password" id="password" name="password"
                    placeholder=":הכנס סיסמא"
                    value={password} onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                    }} />
            </div>



            <div >

                <div >
                    <button onClick={() => {
                        signup(name, id, email, password)
                        // dispatch({ type: "save_user", payload: { name, id, email, password } })
                    }
                    }> רישום   </button>
                </div>

            </div>
        </div>
    </div>
    );

}

// const mapStateToProps = (state) => {
//     return {

//     };
// };

// export default Signup;
//export default Signup;
// export default connect(mapStateToProps, {})(Signup);
export default Signup;
// connect(null, { saveUser })(


