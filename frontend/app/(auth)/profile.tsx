import MainLayout from "@/components/MainLayout";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "@/components/Button";
import Person from "@/assets/images/person.png";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import InputField from "@/components/Input";

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <MainLayout>
      <TouchableOpacity
        onPress={() => router.back()}
        className="p-2 mt-2 flex flex-row items-center space-x-2"
      >
        <AntDesign name="arrowleft" size={24} color="#fff" />
        <Text className="text-white font-Poppins text-md translate-y-0.5">
          Your Profile
        </Text>
      </TouchableOpacity>
      <View className="flex-1 justify-center  space-y-2">
        <View className="relative flex items-center w-28 h-28 rounded-full mx-auto">
          <TouchableOpacity
            className="absolute bottom-0 right-0 z-50"
            onPress={pickImage}
          >
            <MaterialCommunityIcons name="image" size={24} color="#fff" />
          </TouchableOpacity>
          <Image
            source={Person}
            className="w-28 h-28 rounded-full"
            resizeMode="contain"
          />
        </View>
        <View className="items-center">
          <Text className="text-white font-Poppins text-lg font-bold">
            What should people call you?
          </Text>
        </View>
        <View className="w-9/12 mx-auto">
          <InputField placeholder="Username" placeholderTextColor={"#fff"} />
        </View>
        <View className="items-center">
          <Button onPress={() => router.push("/(root)/home")}>Continue</Button>
        </View>
      </View>
    </MainLayout>
  );
};

export default Profile;
