import{useState}from "react";
const RestaurantForm=({onAdd})=>{
    const[form,setForm]=useState({
  "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

    });
    const handleSubmit=()=>{
        if(!form.name|| !form.address){
            alert("All fields Required");
            return;
        }
        onAdd(form);
        setForm({...form,name:"",address:""});
    };
    return(
        <div>
            <h3>Add Restaurant</h3>
            <input 
            placeholder="Name"
            value={form.name}
            onChange={(e)=>setForm({...form,nam:e.target.value})}/>
            <input
            placeholder="Address"
            value={form.address}
            onChange={(e)=>setForm({...form,address:e.target.value})}/>
            <select onChange={(e)=>setForm({...form,type:e.target.value})}>
                {[
                    "Rajasthani",
                     "Gujarati",
                     "Mughlai"  ,
                     "Jain",
                     "Thai",
                     "North Indian",
                     "South Indian",
                ].map((t)=>(
                    <option key={t}>{t}</option>
                ))}
            </select>
            <select onChange={(e)=>setForm({...form,parking:e.target.value})}>
                <option value="true">Parking Available</option>
                <option value="false">No Parking</option>
            </select>
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}
export default RestaurantForm;