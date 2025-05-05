import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ChevronLeft } from "lucide-react-native";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="my_activities" options={{ headerShown: false }} />

      <Stack.Screen
        name="preferences"
        options={{
          title: "Based on your preferences",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              className="border-[1px] shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)] border-[#141D19] rounded-[10px] py-1 px-3"
              onPress={() => router.push("/(tabs)/activities/my_activities")}
            >
              <ChevronLeft size={24} color="#427C67" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#012D17",
            fontSize: 16,
          },
        }}
      />

      <Stack.Screen
        name="stops"
        options={({ route }: { route: { params?: { title?: string } } }) => ({
          title: route.params?.title || "Dettagli Stop",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              className="border-[1px] shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)] border-[#141D19] rounded-[10px] py-1 px-3"
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#427C67" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#012D17",
            fontSize: 16,
          },
        })}
      />

      <Stack.Screen
        name="bestDestination"
        options={{
          title: "Le 10 migliori destinazioni",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              className="border-[1px] shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)] border-[#141D19] rounded-[10px] py-1 px-3"
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#427C67" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#012D17",
            fontSize: 16,
          },
        }}
      />

      <Stack.Screen
        name="allDestination"
        options={{
          title: "Tutte le destinazioni",
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              className="border-[1px] shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)] border-[#141D19] rounded-[10px] py-1 px-3"
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#427C67" />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            color: "#012D17",
            fontSize: 16,
          },
        }}
      ></Stack.Screen>
    </Stack>
  );
}
