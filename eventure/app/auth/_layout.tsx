import { router, Stack } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ChevronLeft, Info } from "lucide-react-native";

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="start" options={{headerShown:true, title:"",  headerBackButtonDisplayMode: "minimal",
                            headerShadowVisible: false,}} />
           <Stack.Screen name="login" options={{headerShown:false,headerBackButtonDisplayMode: "minimal",
                            headerShadowVisible: false,}} />
           <Stack.Screen name="register" options={{headerShown:false}}  />







        </Stack>
    );
}