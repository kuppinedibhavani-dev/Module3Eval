import {useNavigate}from "react-router-dom";
const RestaurantCard=({restaurant,isAdmin,onDelete})=>{
    const navigate=useNavigate();
    return(
        <div className="card">
            <img src={restaurant.image}/>
            <h4>{restaurant.name}</h4>
            <p>{restaurant.address}</p>
            <p>{restaurant.type}</p>
            <p>{restaurant.parking ?"Parking Available":"No Parking"}</p>
            {isAdmin&&(
                <>
                <button 
                onClick={()=>
                    navigate(`/admin/restaurant/update/${restaurant.id}`)
                }
                ></button>
                <button onClick={()=>onDelete(restaurant.id)}>Delete</button>
                </>
            )}
        </div>
    )
}
export default RestaurantCard;