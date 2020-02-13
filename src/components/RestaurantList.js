import React from "react";
import { Text, View, FlatList } from "react-native";


const RestaurantList = ({ title }) => {
    return <View>
             <Text>{title}</Text>
             <FlatList
               horizontal
               data={[1,2,3]}
               renderItem={ ({item}) => <Text id={item}>{item}</Text> }
             />
           </View>
}


const styles = {}

export default RestaurantList;