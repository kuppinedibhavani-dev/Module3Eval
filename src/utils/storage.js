const KEY="EVAL_DATA";
export const getRestaurants=()=>{
    return JSON.parse(localStorage.getItem(KEY))||[];
};
export const saveRestuarants=(data)=>{
    localStorage.setItem(KEY,JSON,stringify(data));
};