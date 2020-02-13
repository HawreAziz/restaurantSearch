import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantView from "../components/RestaurantView";

const SearchScreen = () => {
    const [ term, setTerm ] = useState("");
    const [ searchRestaurants, restaurants, errorMessage ] = useRestaurants();

    const getRestaurats = (price) => {
        return restaurants.filter(restaurant => {
                            return restaurant.price !== undefined && restaurant.price == price});
    }
    return (
        <>
             <SearchBar 
               term={term} 
               onTermChange={ newTerm => setTerm(newTerm) } 
               onTermSubmitt={searchRestaurants}
             />
             { errorMessage ? <Text>{errorMessage}</Text> : null }
             <ScrollView>
               <RestaurantView restaurants={getRestaurats("$")} title="Cost effective" />
               <RestaurantView restaurants={getRestaurats("$$")} title="Bit pricier"  />
               <RestaurantView restaurants={getRestaurats("$$$")} title="Big spender"  />
             </ScrollView>
        </>
        )
}


const styles = {
    backgroundStyle: {
        backgroundColor: "#f6f6f6"
    }
}
export default SearchScreen;
