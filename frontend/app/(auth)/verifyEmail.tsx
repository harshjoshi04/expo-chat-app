import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import { OTPInput } from "@/components/OTP";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const verifyEmail = () => {
  return (
    <MainLayout>
      <TouchableOpacity onPress={() => router.back()} className="p-2 mt-2">
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center space-y-6 pb-16">
        <View className="space-y-1 flex flex-col items-center">
          <Text className="text-white font-PoppinsBlack font-bold text-2xl  ">
            Enter your verification code
          </Text>
          <Text className="text-white font-Poppins">
            We have sent a verification code to{" "}
          </Text>
          <Text className="text-white font-Poppins">hj201812@gmail.com</Text>
        </View>
        <View>
          <OTPInput />
        </View>
        <View>
          <Button
            textClass="text-lg font-bold"
            onPress={() => router.push("/(auth)/profile")}
          >
            Continue
          </Button>
        </View>
      </View>
    </MainLayout>
  );
};

export default verifyEmail;
