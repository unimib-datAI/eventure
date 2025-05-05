import React from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <View className="flex-1 h-[10px] bg-gray-200  rounded-[3px]   ">
            <View
                className="h-full bg-forest rounded-[3px]"
                style={{ width: `${progress}%` }}
            />
        </View>
    );
};

export default ProgressBar;