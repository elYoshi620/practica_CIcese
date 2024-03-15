import React, { useState } from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import passwd_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Inicia Sesion");

    return (
        <div className="container">
            <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
            </div>
            <div className='inputs'>
            <div className='input'>
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Usuario" />
            </div>

            <div className='input'>
              <img src={passwd_icon} alt="" />
              <input type="password" placeholder="Contrasena"  />
            </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Olvidaste tu contrasena? <span>Presiona aqui</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Registrate</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Inicia Sesion</div>
            </div>
        </div>
    );
};

export default LoginSignup