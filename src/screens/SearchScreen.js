import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import axios from "axios";

const SearchScreen = () => {
    const [ term, setTerm ] = useState("");
    const [ restaurants, setRestaurants ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState("");

    const searchRestaurants = async () => {
        try{
            console.log(term)
            const response =  await yelp.get("/search", {
                params: {
                term: term,
                limit: 50,
                location: "New York City"
                
                }});
            console.log(response);
            setRestaurants(response.data.businesses)
        }catch (error){
            setErrorMessage("Something went wrong") 
        }
        
    }

    return <View>
             <SearchBar 
               term={term} 
               onTermChange={ newTerm => setTerm(newTerm) } 
               onTermSubmitt={searchRestaurants}
             />
             { errorMessage ? <Text>{errorMessage}</Text> : null }
             <Text>Found {restaurants.length} restaurants</Text>
           </View>
}


const styles = {
    backgroundStyle: {
        backgroundColor: "#f6f6f6"
    }
}
export default SearchScreen;