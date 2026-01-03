import{useEffect,useState,useRef}from "react";
import { getRestaurants,saveRestuarants } from "../../utils/storage";
import RestaurantForm from "../../components/RestaurantForm";
import RestaurantList from "../../components/RestaurantList";
const AdminDashboard=()=>{
    const[data,setData]=useState([]);
    const searchRef=useRef();
    useEffect(()=>{
        setData(getRestaurants());
        searchRef.current.focus();
    },[]);
    const addRestaurant=(form)=>{
        const newData=[
            ...data,
            {
                ...form,
                id:Date.now(),
                parking:form.parking==="true",
            },
        ];
        saveRestuarants(newData);
        setData(newData);
        alert("Restaurant Added");
    };
    const deleteRestaurant=(id)=>{
        if(!window.confirm("Are you sure you want to delete?"))return;
        const newData=data.filter((r)=>r.id !==id);
        saveRestuarants(newData);
        setData(newData);
        alert("Deleted successfully");
    };
    return(
        <div className="layout">
            <aside>
                <RestaurantForm onAdd={addRestaurant}/>

            </aside>
            <main>
                <input ref={searchRef} placeholder="Search..."/>
                <RestaurantList
                data={data}
                isAdmin
                onDelete={deleteRestaurant}/>
            </main>
        </div>
    )
}
export default AdminDashboard;