import React from "react";
import { Image, View } from "react-native";
import Icon from "@/assets/images/Chatee.png";
const Header = () => {
  return (
    <View className="p-2">
      <Image source={Icon} className="w-24 h-8  " resizeMode="contain" />
    </View>
  );
};

export default Header;
