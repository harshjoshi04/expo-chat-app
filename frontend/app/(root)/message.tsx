import ContactList from "@/components/ContactList";
import Header from "@/components/Header";
import InputField from "@/components/Input";
import MainLayout from "@/components/MainLayout";
import React from "react";
import { View } from "react-native";
import { FlatList, Text } from "react-native";

const message = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <MainLayout>
      <Header />
      <View className="w-11/12 mx-auto">
        <InputField
          className="py-2"
          placeholder="Search Contact"
          placeholderTextColor={"rgba(255,255,255,0.5)"}
        />
      </View>
      <FlatList data={arr} renderItem={ContactList} />
    </MainLayout>
  );
};

export default message;
