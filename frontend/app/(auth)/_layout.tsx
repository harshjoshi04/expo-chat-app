import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ animation: "ios" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="verifyEmail" options={{ headerShown: false }} />
      <Stack.Screen
        name="userauth"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
