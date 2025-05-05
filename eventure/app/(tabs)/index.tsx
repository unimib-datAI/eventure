import React from "react";
import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import SuggestionCard from "@/components/suggestionCard";
import Activity from "@/components/activity";
import Header from "@/components/header";

import Maps from "@/components/maps";
import DATABINGO from "@/app/utils/dataBingo";
import { router } from "expo-router";

const museum = require("../../assets/images/musem.png");
const cross = require("../../assets/images/cross.png");

const labelMuseum = require("@/assets/images/labelMuseum.png");

const labelCross = require("../../assets/images/labelCross.png");

export const DATA: {
  title: string;
  caption: string;
  label: string;
  labelImage: ImageSourcePropType;
  image: ImageSourcePropType;
}[] = [
  {
    title: "Tour dei musei",
    caption:
      "Inizia il tuo percorso da Via dei Tribunali, una delle strade più storiche e affascinanti della città",
    label: "MUSEI",
    image: museum,
    labelImage: labelMuseum,
  },
  {
    title: "Tour dei Luoghi Sacri",
    caption:
      "Inizia il tuo tour da Via Duomo, la via in cui potrai ammirare uno dei luoghi sacri più importanti della città",
    label: "LUOGHI SACRI",
    labelImage: labelCross,
    image: cross,
  },
];

export default function TabOneScreen() {
  const backImage = require("../../assets/images/backImage.png");
  const sunshine = require("../../assets/images/sunshine.png");

  return (
    <ScrollView>
      <View className="flex-1 bg-white px-4 pt-14">
        <Header />

        {/* START Event */}
        <View className="h-[100px] bg-white rounded-[15px] border-grey border-[1px] mt-6 flex-row justify-between items-center">
          <View className="ml-6">
            <Text className="mt-4 mb-1 text-grey font-medium text-sm">
              Il tuo evento inizierà tra
            </Text>
            <Text className="text-base font-bold text-forest">
              22 ore : 55 minuti
            </Text>
            <Text className="mt-4 text-forest text-sm underline">
              Inizia a giocare!
            </Text>
          </View>
          <Image source={backImage} />
        </View>
        {/* END  Event */}

        {/* START Map */}
        <View className="flex flex-row mt-4">
          <Text className="text-black font-regular text-sm mr-3 mb-3">
            Oggi il sole splende! Ci sono 25°
          </Text>
          <Image source={sunshine} />
        </View>

        {/* MAPPA OSM */}
        <Maps />
        {/* END Map */}

        {/* START Suggestion */}
        <Text className="mt-4 mb-3 font-medium text-black text-base">
          I nostri suggerimenti per te a Napoli
        </Text>
        <View className="flex flex-col gap-3">
          {DATA.map((item, index) => (
            <SuggestionCard key={index} {...item} />
          ))}
        </View>
        {/* END Suggestion */}

        {/* START Activity */}
        <Text className="mt-4 mb-3 font-medium text-darkforest text-base">
          Gioca, divertiti ed esplora la città
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-3">
            {DATABINGO.map((item, index) => (
              <Activity key={index} {...item} />
            ))}
          </View>
        </ScrollView>
        {/* END Activity */}
      </View>
    </ScrollView>
  );
}
