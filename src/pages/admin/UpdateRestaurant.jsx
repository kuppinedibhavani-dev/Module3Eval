import{useParams,useNavigate}from "react-router-dom";
import {useEffect,useState}from "react";
import {getRestaurants,saveRestaurants}from "../../utils/storage";
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
        const all=getRestaurants();
        const found=all.find(r=>r.id===Number(id));
        if(found){
            setForm(prev=>{prev.id===found.id?prev:found});
        }
    },[id]);
    const handleUpdate=()=>{
        if(!window.confirm("Are you sure you want to update?"))return;
        const all=getRestaurants();
        const updated=all.map(r=>r.id===Number(id)?{...form,id:Number(id)}:r);
        saveRestaurants(updated);
        alert("Restaurant updated successfully");
        navigate("/admin/dashboard");
    };
    return(
        <div>
            <h2>Update Restaurant</h2>
            <input value={form.name}
            onChange={e=>setForm({...form,name:e.target.value})}
            placeholder="Name"/>
            <input value={form.address}
            onChange={e=>setForm({...form,address:e.target.value})}
            placeholder="Address"/>
            <select value={form.type}
            onChange={e=>setForm({...form,type:e.target.value})}>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Mughali</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North Indian</option>
                <option>South Indian</option>
            </select>
            <select value={String(form.parking)}
            onChange={e=>
                setForm({...form,parking:e.target.value==="true"})
            }
            >
                <option value="true">Parking Available</option>
                <option value="false">No Parking</option>
            </select>
            <input 
            value={form.image}
            onChange={e=>setForm({...form,image:e.target.value})}
            placeholder="Image URL"/>
        </div>
    )

}
export default UpdateRestaurant;