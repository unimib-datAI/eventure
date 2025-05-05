import { TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

interface SelectButton {
    image: any;
    label: string;
    selected: boolean;
    onPress: () => void;

}

const SelectButton  = ({ image, label, selected, onPress } :SelectButton ) => {
  return (
    <TouchableOpacity
      className={`rounded-xl p-[9px] border-[1px] border-[#141D19] w-full flex flex-row items-center gap-2 mt-4 ${
        selected ? 'bg-[#EBF1E6]' : 'bg-white'
      }`}
      style={{
        shadowColor: 'rgba(1, 45, 23, 0.2)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
      }}
      onPress={onPress}
    >
      <Image source={image} className="w-6 h-6" />
      <Text className="text-base font-medium text-forest">{label}</Text>
    </TouchableOpacity>
  );
};

export default SelectButton;