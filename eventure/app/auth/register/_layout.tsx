
import { RelativePathString, Stack, usePathname } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomHeader from '@/components/customheader';
import { router } from 'expo-router';
import { PathConfig } from '@react-navigation/native';

export default function Layout() {
    const [progress, setProgress] = useState(12.5);
    const pathname = usePathname();


    const getCurrentStep = () => {
        if (pathname.includes('step-')) {
            const stepNumber = pathname.split('step-')[1];
            return parseInt(stepNumber);
        }
        return 1;
    };


    useEffect(() => {
        const currentStep = getCurrentStep();
        const progressValue = (currentStep / 8) * 100;
        setProgress(progressValue);
    }, [pathname]);


    const navigateToNextStep = () => {
        const currentStep = getCurrentStep();
        if (currentStep < 8) {
            const nextStepPath = `/auth/register/steps/step-${currentStep + 1}`;
router.push(nextStepPath as RelativePathString);

        }
    };

    return (
        <View className='flex-1 bg-white'>
            <CustomHeader progress={progress} />

            <View style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }}>
                    <Stack.Screen name="steps/step-1" />
                    <Stack.Screen name="steps/step-2" />
                    <Stack.Screen name="steps/step-3" />
                    <Stack.Screen name="steps/step-4" />
                    <Stack.Screen name="steps/step-5" />
                    <Stack.Screen name="steps/step-6" />
                    <Stack.Screen name="steps/step-7" />
                    <Stack.Screen name="steps/step-8" />
                </Stack>
            </View>


            {getCurrentStep() < 8 && (
            <View className="px-4 py-6 bg-white">
                <TouchableOpacity
                    className="bg-forest rounded-xl p-3 border-[1px] border-[#141D19] w-[80%] self-center"
                    onPress={navigateToNextStep}
                >
                    <Text className="text-base text-center font-medium text-[#FFFDFA]">
                        continua
                    </Text>
                </TouchableOpacity>
            </View>

            )}
        </View>
    );
}