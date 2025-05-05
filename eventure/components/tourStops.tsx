import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

interface TourStopsProps {
  stop: {
    title: string;
    minutes: string;
    image: any;
    caption: string;
    price: string;
    address: string;
    rating: string;
  };
}

const TourStops = ({ stop, index }: TourStopsProps & { index: number }) => {
  const handlePress = () => {
    router.push({
      pathname: "/activities/stops",
      params: {
        ...stop,
        image: Image.resolveAssetSource(stop.image).uri,
      },
    });
  };

  return (
    <View className="border-[0.5px] rounded-2xl border-gray p-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <Text className="bg-[##5ACCA6] rounded-[4px] py-3 px-4 text-white">
            {index + 1}
          </Text>
          <View className="flex flex-col gap-2">
            <Text className="text-darkforest text-sm">{stop.title}</Text>
            <Text className="text-xs text-[#141D19]">{stop.minutes}</Text>
          </View>
        </View>
        <Image source={stop.image} className="w-[60px] h-[60px] rounded-2xl" />
      </View>
      <View className="flex flex-row items-center justify-center gap-1 mt-1">
        <TouchableOpacity
          className="bg-[#FFFDFA] rounded-xl p-1 border-[1px] border-[#141D19] basis-1/2"
          onPress={handlePress}
        >
          <Text className="text-base text-center font-medium text-forest">
            Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-forest rounded-xl p-1 border-[1px] basis-1/2">
          <Text className="text-base text-center font-medium text-[#FFFDFA]">
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TourStops;
