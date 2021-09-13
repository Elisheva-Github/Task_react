import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import { connect, useDispatch } from "react-redux";
import { loginToServer } from '../services/login';
import Avatar from '@material-ui/core/Avatar';

const Login = (props) => {
  //   const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const goToSignup = () => {
    history.push("/signup");
  }

  const login = async (userName, password) => {

    const res = await loginToServer(userName, password);

    // if (res && res.kind) {
    if (res && res.kind) {
      // history.replace(`/teacher`,{userName});
      history.push(`/${res.kind}`);
      //   dispatch({ type: "save_user", payload: res.result })

    }
    else {
      alert("User not found😥😥!! please sign up.")
    }
  }


 

  return (<div className="">
    <h1>
      <Avatar>{props.fname}</Avatar>
    </h1>
    {/* <h1>fname: {props.fname}</h1> */}

    <div >

      <div >
        <input type="text" id="userName" name="userName"
          placeholder=":הכנס שם משתמש"
          value={userName} onChange={(e) => {
            console.log(e.target.value)
            setUserName(e.target.value)
          }} />
      </div>

      <div >
        <input type="password" id="uPassword" name="uPassword"
          placeholder=":הכנס סיסמא"
          value={password} onChange={(e) => {
            console.log(e.target.value)
            setPassword(e.target.value)
          }} />
      </div>


      <div  >
        <button onClick={() => login(userName, password)}>  התחברות   </button>
      </div>

      <div >
        <button className="btn-goToSignup" onClick={() => goToSignup()}>  אין לך חשבון? הירשם   </button>
      </div>
    </div>

  </div>
  );

}


// const mapStateToProps = (state) => {

//   return {
//     // fname: state.user?.user?.firstName,
//   };
// };
// export default connect(mapStateToProps, {})(Login);

export default Login;