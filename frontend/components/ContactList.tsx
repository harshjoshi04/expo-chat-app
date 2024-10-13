import React from "react";
import { Image, Text, View } from "react-native";
import Pic from "@/assets/images/pic2.jpeg";

const ContactList = () => {
  return (
    <View className="flex flex-row m-2 items-center space-x-2 ">
      <View>
        <Image
          source={Pic}
          className="w-12 h-12 rounded-full"
          resizeMode="cover"
        />
      </View>
      <View className="flex flex-col">
        <Text className="text-white font-Poppins font-semibold text-md">
          Sukuna
        </Text>
        <Text className="text-white/50 font-Poppins  text-xs">
          King of curses
        </Text>
      </View>
    </View>
  );
};

export default ContactList;
