import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantDetail =  ({navigation}) => {
    const [ restaurantDetail, setRestaurantDetail ] = useState(null);
    const id = navigation.getParam("id");

    const getRestaurantDetail = async id => {
        const response = await yelp.get(`/${id}`);
        setRestaurantDetail(response.data);
    };

    useEffect(() => {
      getRestaurantDetail(id);
    }, [])

    
    if(!restaurantDetail){
        return null;
    }
    console.log(restaurantDetail.name);

    return (
        <>
          <Text style={styles.titleView} >{ restaurantDetail.name }</Text>
          {restaurantDetail.location.display_address.map(addr_line => {
              return <Text id={addr_line}>{addr_line}</Text>
          })}
          <FlatList
            data={restaurantDetail.photos}
            keyExtractor={ photo => photo }
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => {
                return <Image 
                          style={styles.imageStyle}
                          source={{ uri: item}}
                       />
            }}
          />
        </>
    )
}

const styles = {
    imageStyle: {
        width: 200,
        height: 200,
        marginVertical: 5
    },
    titleView: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    }
}
export default RestaurantDetail;