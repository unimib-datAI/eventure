import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import Maps from "@/components/maps";

const stops = () => {
  const params = useLocalSearchParams();
  const { title, minutes, image, caption, price, address, rating } = params;

  const imageSource =
    typeof image === "string"
      ? { uri: image }
      : Array.isArray(image)
      ? { uri: image[0] }
      : image;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="rounded-2xl overflow-hidden">
        <ImageBackground
          source={imageSource}
          className="h-[350px] p-3 flex flex-col justify-between"
          imageStyle={{ borderRadius: 16 }}
        >
          <View className="absolute inset-0 bg-black/30 rounded-2xl" />

          <Text className="text-white text-2xl font-bold">{title}</Text>
          <TouchableOpacity className="bg-forest rounded-xl p-3 border-[1px] border-[#141D19]">
            <Text className="text-base text-center font-medium text-[#FFFDFA]">
              Start
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <Text className="text-base font-bold mt-4 mb-3 text-darkforest">
        Details
      </Text>

      <View className="border-[0.5px] rounded-2xl border-gray mb-5">
        {/* Row 1 */}
        <View className="flex-row border-b-[0.5px] border-gray">
          <View className="flex-1 p-3 border-r-[0.5px] border-gray">
            <Text className="text-darkforest text-xs font-regular text-right">
              Address
            </Text>
          </View>
          <View className="flex-1   p-3">
            <Text className="text-darkforest text-xs font-regular">
              {address}
            </Text>
          </View>
        </View>

        {/* Row 2 */}
        <View className="flex-row border-b-[0.5px] border-gray ">
          <View className="flex-1 p-3 border-r-[0.5px] border-gray ">
            <Text className="text-darkforest text-xs font-regular  text-right">
              Distance{" "}
            </Text>
          </View>
          <View className="flex-1 p-3  ">
            <Text className="text-darkforest text-xs font-regular">
              {minutes}
            </Text>
          </View>
        </View>

        {/* Row 3 */}
        <View className="flex-row border-b-[0.5px] border-gray">
          <View className="flex-1 p-3 border-r-[0.5px] border-gray">
            <Text className="text-darkforest text-xs font-regular  text-right">
              Duration
            </Text>
          </View>
          <View className="flex-1 p-3 ">
            <Text className="text-darkforest text-xs font-regular">
              24 Minutes
            </Text>
          </View>
        </View>

        {/* Row 4 */}
        <View className="flex-row border-b-[0.5px] border-gray">
          <View className="flex-1 p-3 border-r-[0.5px] border-gray">
            <Text className="text-darkforest text-xs font-regular  text-right">
              Review ⭐️
            </Text>
          </View>
          <View className="flex-1 p-3 ">
            <Text className="text-darkforest text-xs font-regular">
              {rating}
            </Text>
          </View>
        </View>

        {/* Row 5 */}
        <View className="flex-row">
          <View className="flex-1 p-3 border-r-[0.5px] border-gray">
            <Text className="text-darkforest text-xs font-regular  text-right">
              Price
            </Text>
          </View>
          <View className="flex-1 p-3  ">
            <Text className="text-darkforest text-xs font-regular">
              {price}
            </Text>
          </View>
        </View>
      </View>

      <Text className="text-gray-700">{caption}</Text>
      <Text className="text-base font-bold mt-4 text-darkforest">Position</Text>
      <Maps />
    </ScrollView>
  );
};

export default stops;
