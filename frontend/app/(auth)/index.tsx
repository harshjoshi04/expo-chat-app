import MainLayout from "@/components/MainLayout";
import React from "react";
import { Image, Text, View } from "react-native";
import Illustration from "@/assets/images/Illustration.png";
import Button from "@/components/Button";
import { router } from "expo-router";

const Home = () => {
  return (
    <MainLayout>
      <View className="flex-1 justify-center items-center space-y-7">
        <Image
          source={Illustration}
          className="w-80 h-80"
          resizeMode="contain"
        />
        <Text className="text-white font-PoppinsBold w-64 text-3xl">
          Break the boundaries and connect with people all over the world
        </Text>
        <View>
          <Button onPress={() => router.push("/userauth")}>Get Started</Button>
        </View>
      </View>
    </MainLayout>
  );
};

export default Home;
