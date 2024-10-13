import React from "react";
import MainLayout from "./MainLayout";
import { ActivityIndicator, Text, View } from "react-native";

const Loading = () => {
  return (
    <MainLayout>
      <View className="flex-1 justify-center">
        <ActivityIndicator size={"large"} className="text-thirdColor" />
      </View>
    </MainLayout>
  );
};

export default Loading;
