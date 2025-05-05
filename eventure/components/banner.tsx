import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import type { Href } from "expo-router";
import { router } from "expo-router";

interface BannerProps {
  title: string;
  cta: string;
  imageUrl: any;
  slug: Href;
}

const Banner = ({ title, cta, imageUrl, slug }: BannerProps) => {
  return (
    <ImageBackground
      source={imageUrl}
      imageStyle={{ borderRadius: 16 }}
      className="h-[190px] py-5 px-3 flex flex-col justify-between overflow-hidden"
    >

      <View className="absolute inset-0 bg-black/20 rounded-2xl" />

      <View className="relative">
        <Text className="text-2xl font-medium text-[#FFFDFA]">{title}</Text>
      </View>

      <TouchableOpacity
        className="bg-forest rounded-xl p-3 border-[1px] border-[#141D19] relative"
        onPress={() => router.push(slug)}
      >
        <Text className="text-base text-center font-medium text-[#FFFDFA]">
          {cta}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Banner;
