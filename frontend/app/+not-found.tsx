import Button from "@/components/Button";
import { Link, router, Stack, useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>This screen doesn't exist.</Text>
        <Button onPress={() => router.push("/(root)/home")}>
          GO Back Home
        </Button>
      </View>
    </>
  );
}
