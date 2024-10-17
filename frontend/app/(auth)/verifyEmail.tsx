import Button from "@/components/Button";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import MainLayout from "@/components/MainLayout";
import { OTPInput } from "@/components/OTP";
import { useUserContext } from "@/context/useUser";
import { APIVerifyOtpToMail } from "@/utils/api-service";
import { AntDesign } from "@expo/vector-icons";
import { AxiosResponse } from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const verifyEmail = () => {
  const [codes, setCodes] = useState<string[] | undefined[]>(Array(4).fill(""));
  const [isSubmit, setisSubmit] = useState(false);
  const [isLoad, setisLoad] = useState(false);
  const { user } = useUserContext();

  const onContinue = async () => {
    setisSubmit(true);
    try {
      if (codes.length < 4) return;
      setisLoad(true);
      const resp: AxiosResponse = await APIVerifyOtpToMail(
        user?.email || "",
        codes.join("")
      );
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Otp verify successfully !.",
      });
      router.replace("/(auth)/profile");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Somethig went wrong !",
      });
    } finally {
      setisLoad(false);
    }
  };
  return (
    <MainLayout>
      {isLoad && <LoadingSkeleton />}
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
          <Text className="text-white font-Poppins">
            {user ? user.email : ""}
          </Text>
        </View>
        <View>
          <OTPInput setCodes={setCodes} codes={codes} isSubmit={isSubmit} />
        </View>
        <View>
          <Button textClass="text-lg font-bold" onPress={onContinue}>
            Continue
          </Button>
        </View>
      </View>
    </MainLayout>
  );
};

export default verifyEmail;
