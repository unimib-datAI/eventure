import React, { useState } from 'react';
import { View,  Button ,Text,Image, TouchableOpacity} from 'react-native';


import { router } from 'expo-router';



const Start = () => {
    const monster = require("../../assets/images/monster.png");
    const logo = require("../../assets/images/logo.png");



  return (
    <View className='flex-1 bg-white px-4  items-center justify-center'>

        <Image source={monster} className="w-[92px] h-[92px]" />
        <Image source={logo}  />

        <Text className='text-base text-[#120D26] font-regular text-center mt-6 w-[80%]'>Scopri la tua città come mai prima d'ora: cammina, accumula punti e trasforma il tuo percorso in un'esperienza unica per migliorare il flusso urbano</Text>
        <TouchableOpacity
  className="w-full bg-forest rounded-xl p-3 border-[1px] border-[#141D19] mt-10"
  onPress={() => router.push("/auth/register/steps/step-1")}
>
  <Text className="text-base text-center font-medium text-[#FFFDFA]">
    Registrati
  </Text>
</TouchableOpacity>

<TouchableOpacity
  className="w-full bg-[#FFFDFA] rounded-xl p-3 border-[1px] border-[#141D19] mt-2"
  onPress={() => router.push("/auth/login")}
>
  <Text className="text-base text-center font-medium  text-forest">
    Ho gia un account
  </Text>
</TouchableOpacity>





    </View>
  );
};

export default Start;