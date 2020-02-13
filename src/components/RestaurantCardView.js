import React from "react";
import { Text, View, Image } from "react-native";


const RestaurantCardView = ({ restaurant }) => {
    return (
        <View 
          style={{ marginLeft: 15 }}>
          <Image 
            style={ styles.imageView } 
            source={{ uri: restaurant.image_url }} />
          <Text style={styles.nameView}>{restaurant.name}</Text>
          <Text>{restaurant.rating} Starts, {restaurant.review_count} Reviewers</Text>
        </View>
    )
}


const styles = {
    imageView: {
        height: 200,
        width: 200,
        borderRadius: 5,
        marginBottom: 5
    },
    nameView: {
        fontWeight: "bold",
    }
}

export default RestaurantCardView;