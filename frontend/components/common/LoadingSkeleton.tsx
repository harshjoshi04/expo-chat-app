import React from "react";
import { View } from "react-native-ui-lib";
import Loading from "../Loading";
import { ActivityIndicator } from "react-native";

const LoadingSkeleton = () => {
  return (
    <View className="absolute w-full h-full z-50 bg-black/70">
      <View className="flex-1 justify-center  w-full h-full items-center  ">
        <ActivityIndicator size={"large"} className="text-thirdColor" />
      </View>
    </View>
  );
};

export default LoadingSkeleton;
