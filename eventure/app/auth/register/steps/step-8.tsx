import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const Step8 = () => {
  const monster = require("@/assets/images/monster.png");

  return (
    <View className="flex-1 bg-white px-4 flex justify-between items-center ">
      <View className="items-center justify-start">
        <View className="border-[#898989] border-[0.5px] rounded-[20px] py-3 px-4 mt-20">
          <Text className="text-[#141D19] font-bold text-2xl">
            Grazie Aurora,{"\n"}benvenuta su Eventure!
          </Text>
        </View>
        <Image source={monster} className="w-[114px] h-[114px] mt-11" />
      </View>

      <TouchableOpacity
        className="bg-forest rounded-xl p-3 border-[1px] border-[#141D19] w-[80%] mb-10"
        onPress={() => router.push("/(tabs)")}
      >
        <Text className="text-base text-center font-medium text-[#FFFDFA]">
          Inizia l'avventura
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step8;
