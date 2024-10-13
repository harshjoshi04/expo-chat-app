import { Stack, Tabs } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#448976",
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          borderEndWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="message1" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
