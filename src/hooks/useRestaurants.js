import { useState, useEffect } from "react";
import yelp from "../api/yelp";



export default useRestaurants = () => {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState("");

    const searchRestaurants = async (term) => {
        try{
            const response =  await yelp.get("/search", {
                params: {
                term: term,
                limit: 50,
                location: "Stockholm"
                
                }});
            setRestaurants(response.data.businesses)
            //console.log(restaurants)
        }catch (error){
            setErrorMessage(error) 
        }
        
    }

    useEffect(() => {
        searchRestaurants("pasta")
    }, []);
    return [searchRestaurants, restaurants, errorMessage];
}
