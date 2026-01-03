import {useEffect,useState}from "react";
import{useAuth}from "../context/AuthContext";
import { getRestaurants } from "../../utils/storage";
import RestaurantList from "../../components/RestaurantList";

const CustomerDashboard=()=>{
    const{user}=useAuth();
    const[restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
        const data=getRestaurants()||[];
        setRestaurants(prev=>(prev.length===0?data:prev));
    },[]);
    if(!user){
        return<p>Loading...</p>
    }
    return(
        <div>
            <h2>Customer Dashboard</h2>
                <RestaurantList data={restaurants}isAdmin={false}/>
        </div>
    )
}
export default CustomerDashboard;