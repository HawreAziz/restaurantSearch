import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import RestaurantCardView from "./RestaurantCardView"
import { withNavigation } from "react-navigation";

const RestaurantList = ({ restaurants, title, navigation }) => {
    if (! restaurants.length){
      return null;
    }
    return <View style={styles.container}>
             <Text style={ styles.titleView }>{title}</Text>
             <FlatList
               keyExtractor={(restaurant) => restaurant.id}
               horizontal
               showsHorizontalScrollIndicator={false}
               data={restaurants}
               renderItem={ ({item}) => {
                 return (
                     <TouchableOpacity onPress={ () => navigation.navigate("Detail", {id: item.id}) } >
                       <RestaurantCardView restaurant={item} /> 
                     </TouchableOpacity>
                 )
                 }}
             />
           </View>
}


const styles = {
  titleView: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
}

export default withNavigation(RestaurantList);