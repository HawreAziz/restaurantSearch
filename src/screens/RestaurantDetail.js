import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantDetail =  ({navigation}) => {
    const [ restaurntDetail, setRestaurantDetail ] = useState(null);
    const id = navigation.getParam("id");

    const getRestaurantDetail = async id => {
        const response = await yelp.get(`/${id}`);
        setRestaurantDetail(response.data);
    };

    useEffect(() => {
      getRestaurantDetail(id);
    }, [])

    
    if(!restaurntDetail){
        return null;
    }
    console.log(restaurntDetail);

    return (
        <View>
          <FlatList
            data={restaurntDetail.photos}
            keyExtractor={ photo => photo }
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => {
                return <Image 
                          style={styles.imageStyle}
                          source={{ uri: item}}
                       />
            }}
          />
        </View>
    )
}

const styles = {
    imageStyle: {
        width: 200,
        height: 200,
        marginVertical: 5
    }
}
export default RestaurantDetail;