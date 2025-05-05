import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { router, Stack } from "expo-router";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { TouchableOpacity, useColorScheme } from "react-native";
import { ChevronLeft } from "lucide-react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("@/assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    router.replace("/auth/start");
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack >


        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="game" options={{
            headerShown: false,


            }} />
        <Stack.Screen name="auth" options={{  headerShown: false }} />



        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
