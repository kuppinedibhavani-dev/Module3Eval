import RestaurantCard from "./RestaurantCard";
const RestaurantList=({data,isAdmin,onDelete})=>{
    if(!data||data.length===0){
        return<p>No restaurants found</p>
    }
    return(
        <div>
            {data.map((restaurant)=>(
                <RestaurantCard
                key={RestaurantCard.id}
                restaurant={restaurant}
                isAdmin={isAdmin}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
}
export default RestaurantList;