import React from "react";
import { TextInput, View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmitt }) => {
    return (
        <View style={styles.viewStyle}>
         <EvilIcons name="search" style={styles.iconStyle} />
         <TextInput style={styles.testInputStyle} 
             autoCapitalize="none"
             autoCorrect={false}
             placeholder="Search" 
             value={term}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmitt}  
            />
        </View>
    );
}


const styles = {
    viewStyle: {
        backgroundColor: "#DCDCDC",
        flexDirection: "row",
        margin: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    testInputStyle: {
        height: 50,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center"
    }
}

export default SearchBar;

