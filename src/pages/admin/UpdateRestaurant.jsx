import{useParams,useNavigate}from "react-router-dom";
import {useEffect,useState}from "react";
import {getRestuarants,saveRestaurants}from "../../utils/storage";
const UpdateRestaurant=()=>{
    const{id}=useParams();
    const navigate=useNavigate();
    const[form,setForm]=useState({
        name:"",
        address:"",
        type:"",
        parking:false,
        image:""
    });
    useEffect(()=>{
        const all=getRestuarants();
        const found=all.find(r=>r.id===Number(id));
        if(found)setForm(found);

    },[id]);
    const handleUpdate=()=>{
        if(!window.confirm("Are you sure you want to update?"))return;
        const all=getRestaurant
    }
}