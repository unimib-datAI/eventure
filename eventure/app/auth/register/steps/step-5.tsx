import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import SelectButton from '@/components/selectbutton';

const Step5 = () => {
  const [selectedAgeRange, setSelectedAgeRange] = useState<'under18' | '18to24' | '25to35' | '36to50' | '51plus' | null>(null);

  const monster = require("@/assets/images/monster.png");
  const seed = require("@/assets/images/seed.png");
  const sprout = require("@/assets/images/sprout.png");
  const sprutBig = require("@/assets/images/sprutBig.png");
  const plant = require("@/assets/images/plant.png");
  const tree = require("@/assets/images/tree.png");

  const handleSelectAgeRange = (ageRange: 'under18' | '18to24' | '25to35' | '36to50' | '51plus' | null): void => {
    if (selectedAgeRange === ageRange) {
      setSelectedAgeRange(null);
    } else {
      setSelectedAgeRange(ageRange);
    }
  };

  return (
    <View className='flex-1 bg-white px-10 py-10 flex flex-col justify-between items-center'>
      <View className='flex justify-start items-center w-full'>
        <View className="flex flex-row justify-center items-center gap-4 mb-[20px]">
          <Image source={monster} className="w-[78px] h-[78px]" />
          <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 h-16">
            <Text className="text-[#141D19] text-base font-bold">Quanti anni hai?</Text>
            <Text className="text-[#141D19] text-xs font-light">Seleziona la tua risposta</Text>
          </View>
        </View>

        <SelectButton
          image={seed}
          label="Meno di 18"
          selected={selectedAgeRange === 'under18'}
          onPress={() => handleSelectAgeRange('under18')}
        />

        <SelectButton
          image={sprout}
          label="18-24"
          selected={selectedAgeRange === '18to24'}
          onPress={() => handleSelectAgeRange('18to24')}
        />

        <SelectButton
          image={sprutBig}
          label="25-35"
          selected={selectedAgeRange === '25to35'}
          onPress={() => handleSelectAgeRange('25to35')}
        />

        <SelectButton
          image={plant}
          label="36-50"
          selected={selectedAgeRange === '36to50'}
          onPress={() => handleSelectAgeRange('36to50')}
        />

        <SelectButton
          image={tree}
          label="51 e oltre"
          selected={selectedAgeRange === '51plus'}
          onPress={() => handleSelectAgeRange('51plus')}
        />
      </View>


    </View>
  );
}

export default Step5;
