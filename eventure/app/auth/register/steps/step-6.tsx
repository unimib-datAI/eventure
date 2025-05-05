import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import SelectButton from '@/components/selectbutton';

const Step6 = () => {
  const [selectedTransport, setSelectedTransport] = useState<Set<'walk' | 'bike' | 'scooter' | 'bus' | 'metro' | 'train'>>(new Set());

  const monster = require("@/assets/images/monster.png");
  const walk = require("@/assets/images/walk.png");
  const bike = require("@/assets/images/bike.png");
  const scooter = require("@/assets/images/scooter.png");
  const bus = require("@/assets/images/bus.png");
  const metro = require("@/assets/images/metro.png");
  const train = require("@/assets/images/train.png");

  const handleSelectTransport = (transport: 'walk' | 'bike' | 'scooter' | 'bus' | 'metro' | 'train'): void => {
    const newSelection = new Set(selectedTransport);
    if (newSelection.has(transport)) {
      newSelection.delete(transport);
    } else {
      newSelection.add(transport);
    }
    setSelectedTransport(newSelection);
  };

  return (
    <View className='flex-1 bg-white px-10 py-10 flex flex-col justify-between items-center'>
      <View className='flex justify-start items-center w-full'>
        <View className="flex flex-row justify-center items-center gap-4 mb-[20px]">
          <Image source={monster} className="w-[78px] h-[78px]" />
          <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 ">
            <Text className="text-[#141D19] text-base font-bold">Come riesci a {"\n"}spostarti?</Text>
            <Text className="text-[#141D19] text-xs font-light">Puoi selezionare più di una risposta</Text>
          </View>
        </View>

        <SelectButton
          image={walk}
          label="A piedi"
          selected={selectedTransport.has('walk')}
          onPress={() => handleSelectTransport('walk')}
        />

        <SelectButton
          image={bike}
          label="In bicicletta"
          selected={selectedTransport.has('bike')}
          onPress={() => handleSelectTransport('bike')}
        />

        <SelectButton
          image={scooter}
          label="In scooter"
          selected={selectedTransport.has('scooter')}
          onPress={() => handleSelectTransport('scooter')}
        />

        <SelectButton
          image={bus}
          label="In autobus"
          selected={selectedTransport.has('bus')}
          onPress={() => handleSelectTransport('bus')}
        />

        <SelectButton
          image={metro}
          label="In metropolitana"
          selected={selectedTransport.has('metro')}
          onPress={() => handleSelectTransport('metro')}
        />

        <SelectButton
          image={train}
          label="In treno"
          selected={selectedTransport.has('train')}
          onPress={() => handleSelectTransport('train')}
        />
      </View>


    </View>
  );
}

export default Step6;
