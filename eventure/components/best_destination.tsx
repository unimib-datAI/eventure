import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

interface Best_destinationProps {
  labelImage: any;
  label: string;
  image: any;
  title: string;
  time: number;
}

const Best_destination = ({
  labelImage,
  label,
  image,
  title,
  time,
}: Best_destinationProps) => {
  const pin = require("@/assets/images/pin.png");
  return (
    <View className="flex flex-col w-[186px] border-[0.5px] border-[#898989] p-3 rounded-2xl ">
      <View className="flex flex-row items-center gap-2">
        <Image
          source={labelImage}
          className="mr-1 h-[15px] w-[15px]"
          resizeMode="cover"
        />
        <Text className="text-[10px] text-darkforest"> {label}</Text>
      </View>

      <Image
        source={image}
        className=" h-[226px] rounded-2xl mt-3"
        resizeMode="cover"
      />

      <Text className="mt-3 text-sm text-darkforest font-regular">{title}</Text>

      <View className="flex flex-row items-center mt-2 gap-1">
        <Image
          source={pin}
          style={{ width: 15, height: 15, resizeMode: "contain" }}
        />
        <Text className=" text-[10px] text-darkforest font-light">
          {time} minuti a piedi{" "}
        </Text>
      </View>
      <TouchableOpacity className="bg-forest rounded-lg p-2 border-[1px] border-[#141D19] mt-3">
        <Text className="text-base text-center font-medium text-[#FFFDFA]">
          Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Best_destination;
