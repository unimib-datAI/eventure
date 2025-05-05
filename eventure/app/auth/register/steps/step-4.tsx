import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import SelectButton from '@/components/selectbutton';



const Step4 = () => {



  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'other' | null>(null);

  const monster = require("@/assets/images/monster.png");
  const man = require("@/assets/images/man.png");
  const woman = require("@/assets/images/woman.png");
  const other = require("@/assets/images/other.png");

  interface GenderButtonProps {
    image: any;
    label: string;
    selected: boolean;
    onPress: () => void;
  }

  const handleSelectGender = (gender: 'male' | 'female' | 'other' | null): void => {

    if (selectedGender === gender) {
      setSelectedGender(null);
    } else {
      setSelectedGender(gender);
    }
  };

  return (
    <View className='flex-1 bg-white px-10 py-10 flex flex-col justify-between  items-center'>

<View className=' flex justify-start items-center w-full'>
      <View className="flex flex-row justify-center items-center gap-4 mb-[20px]">
        <Image source={monster} className="w-[78px] h-[78px]" />
        <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 h-16">
          <Text className="text-[#141D19] text-base font-bold">Qual è il tuo genere?</Text>
          <Text className="text-[#141D19] text-xs font-light">Seleziona la tua risposta</Text>
        </View>
      </View>

      <SelectButton
        image={man}
        label="Maschio"
        selected={selectedGender === 'male'}
        onPress={() => handleSelectGender('male')}

      />

      <SelectButton
        image={woman}
        label="Femmina"
        selected={selectedGender === 'female'}
        onPress={() => handleSelectGender('female')}
      />

      <SelectButton
        image={other}
        label="Altro"
        selected={selectedGender === 'other'}
        onPress={() => handleSelectGender('other')}
      />

</View>




    </View>
  );
}

export default Step4;