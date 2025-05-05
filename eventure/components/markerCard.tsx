
import React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface SuggestionCard {
  title: string;
  caption: string;
  label:string;
  labelImage: ImageSourcePropType;
  image: ImageSourcePropType;
}

const MarkerCard = ({ title, caption,label,labelImage,  image }: SuggestionCard) => {


  return (

      <View className="flex  rounded-2xl border-[0.5px] border-grey p-3
">
        <View className="flex flex-row items-center justify-start ">
          <Image
            source={image}
            className="mr-4 h-[73px] w-[73px]"
            resizeMode="cover"
          />

          <View className="flex-1">
            <View className="flex flex-row items-center">
            <Image
            source={labelImage}
            className="mr-1 h-[15px] w-[15px]"
            resizeMode="cover"
          />
          <Text className="text-[8px] text-darkforest"> {label}</Text>
                 </View>
 <Text className="font-medium text-xs text-darkforest ">
              {title}
            </Text>
            <View className="mb-2"></View>
            <Text className="text-[10px] font-light text-darkforest  ">
              {caption}
            </Text>
          </View>
        </View>
      </View>

  );
};

export default MarkerCard;


