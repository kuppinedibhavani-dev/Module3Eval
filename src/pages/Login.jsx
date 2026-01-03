import{useState}from "react";
import{useNavigate}from "react-router-dom";
import{useAuth}from "/context/AuthContext";
const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{login}=useAuth();
    const navigate=useNavigate();

    const handleLogin=()=>{
        const res=login(email,password);
        if(!res)return alert("Invalid email or password");
        if(res.role==="admin")navigate("/admin/dashboard");
        else navigate("/customer/dashboard");
    };
    return(
        <div className="center">
            <h2>Login</h2>
            <input placeholder="Email"onChange={(e)=>
                setEmail(e.target.value)
            }/>
            <input placeholder="Password"
            type="password"
            onChange={(e)=>
                setPassword(e.target.value)
            }/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;