import { router, Stack } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ChevronLeft, Info } from "lucide-react-native";

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="walkingbingo" options={{
                            title: "Walking Bingo",
                            headerBackButtonDisplayMode: "minimal",
                            headerShadowVisible: false,
                            headerLeft: () => (
                                <TouchableOpacity
                                    className='border-[1px] shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)] border-[#141D19] rounded-[10px] py-1 px-3'
                                    onPress={() => router.back()}
                                >
                                    <ChevronLeft size={24} color="#427C67" />
                                </TouchableOpacity>
                            ),
                            headerTitleStyle: {
                                color: "#012D17",
                                fontSize: 16,
                            },
                            headerRight: () => (
                                <TouchableOpacity
                                    className=' shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)]  rounded-[10px] p-2'
                                    onPress={() => router.push("/game/walkingbingoInfo")}
                                >
                                    <Info size={20} color="#427C67" />
                                </TouchableOpacity>
                            ),
                        }} />

<Stack.Screen name="walkingbingoInfo" options={{
                title: "Informazioni",
                headerBackButtonDisplayMode: "minimal",
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity
                        className='border-[1px] shadow-[2px_2px_0px_0px_rgba(1,45,23,0.2)] border-[#141D19] rounded-[10px] py-1 px-3'
                        onPress={() => router.back()}
                    >
                        <ChevronLeft size={24} color="#427C67" />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    color: "#012D17",
                    fontSize: 16,
                },
            }} />







        </Stack>
    );
}