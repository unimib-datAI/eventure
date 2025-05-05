import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { router } from "expo-router";

const step2 = () => {
  const monster = require("@/assets/images/monster.png");

  return (
    <View className="flex-1 bg-white px-8 flex justify-between items-center">
      <View className="items-center justify-start w-full">
        <View className="border-[#898989] border-[0.5px] rounded-[20px] py-3 px-4 mt-20">
          <Text className="text-[#141D19] font-bold text-2xl">
            Tu come ti chiami?
          </Text>
        </View>

        <Image source={monster} className="w-[114px] h-[114px] mt-11" />

        <Text className="text-[#141D19] text-base font-bold mt-14 self-start">
          Digita qua il tuo nome
        </Text>

        <TextInput
          className="p-3 border border-gray-300 rounded-lg w-full mt-2"
          placeholder="Il tuo nome"
        />
      </View>


    </View>
  );
};

export default step2;
