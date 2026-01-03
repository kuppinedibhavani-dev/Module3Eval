import {createContext,useContext,useState}from "react";
const AuthContext=createContext(null);
const users=[
    {role:"admin",email:"admin@gmail.com",password:"admin1234"},
    {role:"customer",email:"customer@gmail.com",password:"customer1234"},
];
export const AuthProvider=({children})=>{
    const[user,setUser]=useState(
        JSON.parse(localStorage.getItem("USER"))||null
    );
    const login=(email,password)=>{
        const foundUser=users.find(
            (u)=>u.email===email&&u.password===password
        );
        if(!foundUser)return null;
        localStorage.setItem("USER",JSON.stringify(foundUser));
        setUser(foundUser);
        return foundUser;
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