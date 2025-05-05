import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@/constants/Colors";
import "@/styles/global.css";
import { useColorScheme } from "react-native";
import { Map, Home, Ticket, Gem, User } from "lucide-react-native";
import { Coins } from "phosphor-react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].text,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home strokeWidth={1.5} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ color }) => <Map strokeWidth={1.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          headerShown: false,
          title: "Activity",
          tabBarIcon: ({ color }) => <Ticket strokeWidth={1.5} color={color} />,
        }}
      />
      <Tabs.Screen
        name="points"
        options={{
          headerShown: false,
          title: "Points",
          tabBarIcon: ({ color }) => <Gem color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
