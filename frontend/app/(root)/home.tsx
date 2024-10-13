import Header from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import React from "react";
import { Image, Text, View } from "react-native";
import Bg from "@/assets/images/bg.jpg";
import Pic from "@/assets/images/pic.jpg";
import Tabs from "@/components/Tabs";

const HomePage = () => {
  return (
    <MainLayout>
      <Header />
      <View className="mt-2 ">
        <View className="relative">
          <Image
            source={Bg}
            className="w-full h-40 opacity-95"
            resizeMode="cover"
          />
          <View className="absolute -bottom-10 left-5">
            <Image
              source={Pic}
              className="w-20 h-20 rounded-full"
              resizeMode="cover"
            />
          </View>
        </View>
        <View className="flex flex-col space-y-1  mt-12 mx-4">
          <Text className="text-lg font-PoppinsBold text-white">
            Aizen Sosuke
          </Text>
          <Text className="text-white font-Poppins text-xs">@aizen</Text>
          <Text className="text-thirdColor font-Poppins text-xs">
            instagram.com/
          </Text>
          <Text className="text-white font-Poppins text-xs">
            Rules are made to be broken!
          </Text>
        </View>
        <Tabs />
      </View>
    </MainLayout>
  );
};

export default HomePage;
