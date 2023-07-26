import React, { useState } from "react";
import './login.css';
import {AiFillEye ,AiFillEyeInvisible} from 'react-icons/ai';
import {useHistory } from "react-router-dom";
import Logo from '../../harta/img/login.png'

 
const Login = () =>{
    const [lihatPassword , setLihatPassword] = useState(false);
    const [nip , setNip] = useState(" ");
    const [password , setPassword] = useState(" ");
    const history = useHistory();




    const login = (e)=>{
        if(nip === "1207050111" && password === "secret"){
            history.push('/dashboard');
        }if(nip === "  " && password === "  "){
            e.preventDefault();
            window.alert('Please Insert Your Nip And Your Password')
        }if(!nip || !password) {
            e.preventDefault();
            window.alert('Password Or Nip is Wrong...')
            
        }
        e.preventDefault();
        
    }
    return (
        <>
            <div className="bungkusLogin">
               <div className="loginAtas">
                <p>GAJIKUY</p>
                <img src={Logo} alt="logo" />
               </div>
               <div className="formLogin">
                <form onSubmit={login}>
                    <div className="bungkusInputLogin"><input type="text" placeholder="NIP" value={nip} onChange={(e)=> setNip(e.target.value)}/></div>
                    <div className="bungkusInputLogin"><input type={lihatPassword ? 'text' : "password"} placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <div className="buttonPw" onClick={()=>{
                        setLihatPassword(!lihatPassword)
                    }}>{lihatPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</div></div>
                <button type="submit">Login</button>
                </form>
               </div>
            </div>
        </>
    )
}
export default Login;