import { View, Text, FlatList, TouchableOpacity,Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "OrderScreen",
  },
];

const NavOptions = () => {
    const navigation=useNavigation();
  return (
    <View>
      <FlatList
      horizontal
        data={data}
        keyExtractor={(item)=>(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>navigation.navigate(item.screen)}
          style={tw`p-5 bg-gray-200 m-2 rounded`}>
            <View style={tw`text-center`}>
                <Image 
                style={{height:100,width:100,resizeMode:"contain"}}
                source={{uri: item.image}} 
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`bg-black rounded-full mt-2 w-10 p-2`}
                name="arrowright"
                color="white"
                type="antdesign" />
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

export default NavOptions;
