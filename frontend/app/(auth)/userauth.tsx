import MainLayout from "@/components/MainLayout";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import InputField from "@/components/Input";
import Button from "@/components/Button";
import Toast from "react-native-toast-message";
import { AxiosResponse } from "axios";
import { sendOtpToMail } from "@/utils/api-service";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import { useUserContext } from "@/context/useUser";

const UserAuth = () => {
  const [email, setemail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const { setUserEmail } = useUserContext();

  const handleSendOtp = async () => {
    setIsSubmit(true);
    if (!email) return;
    try {
      const resp: AxiosResponse = await sendOtpToMail(email);
      console.log(resp);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Otp Send on your mail.",
      });
      setUserEmail(email);
      router.replace("/(auth)/verifyEmail");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Somethig went wrong !",
      });
    }
    setIsSubmit(false);
  };
  return (
    <MainLayout>
      {isSubmit && <LoadingSkeleton />}
      <TouchableOpacity onPress={() => router.back()} className="p-2 mt-2">
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center space-y-4 pb-24">
        <Text className="text-white font-Poppins font-bold text-xl">
          Enter Your Email
        </Text>
        <View className="w-8/12">
          <InputField
            border={
              isSubmit && !email ? "border-[#F74242]" : "border-neutral-300"
            }
            placeholder="abc@gmail.com"
            placeholderTextColor={"rgba(255,255,255,0.5)"}
            onChangeText={(e) => setemail(e)}
            value={email}
          />
        </View>
        <View>
          <Button LinerClass="px-16" onPress={handleSendOtp}>
            Continue
          </Button>
        </View>
      </View>
    </MainLayout>
  );
};

export default UserAuth;
