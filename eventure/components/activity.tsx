
import { router } from "expo-router";
import React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";


interface activity {
  title: string;
  caption: string;

  image: ImageSourcePropType;
}

const Activity = ({ title, caption,  image }: activity) => {


  return (
<TouchableOpacity className="flex w-[101px] items-center rounded-2xl border-[0.5px] border-grey p-2
mb-2" onPress={() => router.push("/game/walkingbingo")}>


<Image source={image} className="w-[53px] h-[53px]"></Image>
<Text className="text-sm text-darkforest font-medium mt-2 text-center">{title}</Text>
<Text className="text-[10px] text-darkforest font-light text-left mt-1">{caption}</Text>

</TouchableOpacity>


  );
};

export default Activity;


