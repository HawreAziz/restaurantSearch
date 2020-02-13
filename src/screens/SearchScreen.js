import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
    const [ term, setTerm ] = useState("");
    const [ searchRestaurants, restaurants, errorMessage ] = useRestaurants();
    const costEffective = restaurants.filter( restaurant => {
        return restaurant.price !== undefined && restaurant.price.length === 1
    });
    console.log(costEffective)
    return <View>
             <SearchBar 
               term={term} 
               onTermChange={ newTerm => setTerm(newTerm) } 
               onTermSubmitt={searchRestaurants}
             />
             { errorMessage ? <Text>{errorMessage}</Text> : null }
             <Text>Found {restaurants.length} restaurants</Text>
             <RestaurantList title="Cost effective" />
             <RestaurantList title="Bit pricier" />
             <RestaurantList title="Big spender" />
           </View>
}


const styles = {
    backgroundStyle: {
        backgroundColor: "#f6f6f6"
    }
}
export default SearchScreen;