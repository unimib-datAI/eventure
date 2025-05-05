import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './progressBar';
import { router } from 'expo-router';

interface CustomHeaderProps {
    progress: number;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ progress }) => {
    const navigation = useNavigation();

    return (
        <View className="flex-row  justify-center items-center p-10 bg-white  ">

            <TouchableOpacity onPress={() => router.back()} className='right-8'   >
                <ChevronLeft size={24} color="#000" />
            </TouchableOpacity>


            <ProgressBar progress={progress} />
        </View>
    );
};

export default CustomHeader;