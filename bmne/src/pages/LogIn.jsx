import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const LogIn = () => {

    const navigate = useNavigate();
    const context = useContext(AppContext);
    const {setLogedIn} = context;

    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //console.log(password);

    const logIn = (e) => {
        e.preventDefault();
        let user = {
            email:email,
            password:password
        }


        axios.post("http://localhost:8080/auth/authenticate", user)
        .then(res => {
            
            if(res.status !== 200){
                throw Error("could not login");
            }
            
            window.localStorage.setItem('Token', res.data.token);
            setLogedIn(true);
            setEmail("");
            setPassword("");
            
            navigate("/");
            console.log(window.localStorage.getItem('Token'));
            
        })
        .catch(error => {
            console.log(error);
        })

    }


    return (
        <div className="flex flex-row w-6/12 mt-5 align-middle h-sc justify-between items-center mx-auto my-auto rounded-lg border-4 border-gray-500">
            <div className="w-3/5 h-full">
                <img className="h-full rounded-l-sm w-max object-cover" src="https://img.itinari.com/page/content/original/90d61de3-0389-47e9-9f60-1fde951f0589-istock-512815952.jpg?ch=DPR&dpr=2.625&w=994&s=20219fef65d0e22ab8f7bd87e14a108d" alt="" />
            </div>    
            <div className="flex flex-col align-middle justify-evenly items-center h-form w-80  font-montserrat mx-auto ">
                {/* <TextField required value={firstName} onChange={e => setFirstName(e.target.value)} id="standard-basic" variant="standard" label="First name" InputProps={{style:{font:"inherit", fontWeight:"bold"}}} InputLabelProps={{style:{font:"inherit", fontSize:20, color:"black", fontWeight:100}}}></TextField>
                <TextField required value={lastName} onChange={e => setLastName(e.target.value)} id="standard-basic" variant="standard" label="Last name" InputProps={{style:{font:"inherit", fontWeight:"bold"}}} InputLabelProps={{style:{font:"inherit", fontSize:20, color:"black", fontWeight:100}}}></TextField>
                <TextField required value={email} onChange={e => setEmail(e.target.value)} id="standard-basic" variant="standard" label="Email" InputProps={{style:{font:"inherit", fontWeight:"bold"}}} InputLabelProps={{style:{font:"inherit", fontSize:20, color:"black", fontWeight:100}}}></TextField>
                <TextField required value={password} onChange={e => setPassword(e.target.value)} id="standard-basic" variant="standard" label="Password" InputProps={{style:{font:"inherit", fontWeight:"bold"}}} InputLabelProps={{style:{font:"inherit", fontSize:20, color:"black", fontWeight:100}}}></TextField>
                 */}
                <div className="formdiv">
                    <label className="label" htmlFor="">Email</label>
                    <input required value={email} onChange={ e => setEmail(e.target.value)} className="input" type="text" />
                </div>
                <div className="formdiv">
                    <label className="label" htmlFor="">Password</label>
                    <div className="flex flex-row w-full">
                        <input required value={password} onChange={ e => setPassword(e.target.value)} className="input mr-5" type={`${visible ? "text" : "password"}`} />
                        <button onClick={() => setVisible(!visible)} className="transition-all duration-150">
                            {visible ? 
                                (

                                    <AiOutlineEye className="w-6 h-6 text-gray-500"></AiOutlineEye>
                                )
                                :
                                (
                                    <AiOutlineEyeInvisible className="w-6 h-6 text-gray-500"></AiOutlineEyeInvisible>
                                )

                            }
                        </button>
                    </div>
                </div>
                <button className="button" onClick={logIn}>Log In</button>
                <Link to="/register" className="hover:text-blue-700 hover:underline ">Don't have an account?</Link>
            </div>
        </div>
    );
}
 
export default LogIn;