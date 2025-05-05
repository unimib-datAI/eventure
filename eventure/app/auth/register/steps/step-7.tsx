import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import SelectButton from '@/components/selectbutton';

const Step7 = () => {
  const [selectedTransport, setSelectedTransport] = useState<Set<'arte' | 'food' | 'shopping' | 'park' | 'theatre' | 'museum' | 'monumenti'>>(new Set());

  const monster = require("@/assets/images/monster.png");
  const theatre = require("@/assets/images/theatre.png");
  const monumenti = require("@/assets/images/monumenti.png");
  const labelMuseum = require("@/assets/images/labelMuseum.png");
  const food = require("@/assets/images/food.png");
  const shopping = require("@/assets/images/shopping.png");
  const park = require("@/assets/images/park.png");
  const arte = require("@/assets/images/arte.png");

  const handleSelectTransport = (transport: 'arte' | 'food' | 'shopping' | 'park' | 'theatre' | 'museum' | 'monumenti'): void => {
    const newSelection = new Set(selectedTransport);
    if (newSelection.has(transport)) {
      newSelection.delete(transport);
    } else {
      newSelection.add(transport);
    }
    setSelectedTransport(newSelection);
  };

  return (
    <View className='flex-1 bg-white px-10  flex flex-col justify-between items-center'>
      <View className='flex justify-start items-center w-full'>
        <View className="flex flex-row justify-center items-center gap-4 mb-[15px]">
          <Image source={monster} className="w-[78px] h-[78px]" />
          <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 ">
            <Text className="text-[#141D19] text-base font-bold">Come riesci a {"\n"}spostarti?</Text>
            <Text className="text-[#141D19] text-xs font-light">Puoi selezionare più di una risposta</Text>
          </View>
        </View>

        <SelectButton
          image={arte}
          label="Arte"
          selected={selectedTransport.has('arte')}
          onPress={() => handleSelectTransport('arte')}
        />

        <SelectButton
          image={food}
          label="Cultura culinaria"
          selected={selectedTransport.has('food')}
          onPress={() => handleSelectTransport('food')}
        />

        <SelectButton
          image={shopping}
          label="Shopping"
          selected={selectedTransport.has('shopping')}
          onPress={() => handleSelectTransport('shopping')}
        />

        <SelectButton
          image={park}
          label="Parchi e natura"
          selected={selectedTransport.has('park')}
          onPress={() => handleSelectTransport('park')}
        />

        <SelectButton
          image={theatre}
          label="Musica e teatro"
          selected={selectedTransport.has('theatre')}
          onPress={() => handleSelectTransport('theatre')}
        />

        <SelectButton
          image={labelMuseum}
          label="Musei e mostre"
          selected={selectedTransport.has('museum')}
          onPress={() => handleSelectTransport('museum')}
        />

        <SelectButton
          image={monumenti}
          label="Monumenti e chiese"
          selected={selectedTransport.has('monumenti')}
          onPress={() => handleSelectTransport('monumenti')}
        />
      </View>


    </View>
  );
}

export default Step7;
