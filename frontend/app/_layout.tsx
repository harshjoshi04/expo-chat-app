import Loading from "@/components/Loading";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import "react-native-reanimated";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#5CB85C" }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: "#1E1E1E",
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "#fff",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#F74242" }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: "#1E1E1E",
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "#fff",
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsItalic: require("../assets/fonts/Poppins-BlackItalic.ttf"),
  });

  const hideSplashScreen = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <>
      <Stack screenOptions={{ animation: "fade" }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <Toast position="bottom" config={toastConfig} />
    </>
  );
}
