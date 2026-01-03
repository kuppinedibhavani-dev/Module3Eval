import {createContext,useContext,useState}from "react";
const AuthContext=createContext();
const users=[
    {role:"admin",email:"admin@gmail.com",password:"admin1234"},
    {role:"customer",email:"customer@gmail.com",password:"customer1234"},
];
export const AuthProvider=({children})=>{
    const[user,setUser]=useState(
        JSON.parse(localStorage.getItem("USER"))||null
    );
    const login=(email,password)=>{
        const found=users.find(
            (u)=>u.email===email&&u.password===password
        );
        if(!found)return false;
        localStorage.setItem("USER",JSON,stringify(found));
        setUser(found);
        return found;
    };
    const logout=()=>{
        localStorage.removeItem("USER");
        setUser(null);
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth=()=>useContext(AuthContext);