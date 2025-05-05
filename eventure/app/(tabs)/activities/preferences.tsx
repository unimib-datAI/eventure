import { ImageSourcePropType, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import TourStops from "@/components/tourStops";
import Maps from "@/components/maps";
import GreenLine from "@/components/greenLine";
import tourStopData from "@/app/utils/tourStopData";

export default function Preferences() {
  const [selectedTransport, setSelectedTransport] = useState("walk");
  const [duration, setDuration] = useState("2h 5m");
  const [numberOfStops, setNumberOfStops] = useState(20);
  const [filteredStops, setFilteredStops] = useState<
    {
      title: string;
      minutes: string;
      image: any;
      caption: string;
      price: string;
      address: string;
      rating: string;
    }[]
  >([]);

  const walk = require("@/assets/images/walk.png");
  const bike = require("@/assets/images/bike.png");
  const bus = require("@/assets/images/bus.png");
  const taxi = require("@/assets/images/taxi.png");
  const monster = require("@/assets/images/monster.png");
  const leaf = require("@/assets/images/leaf.png");

  // useEffect(() => {
  //   if (selectedTransport === "taxi") {
  //     setFilteredStops([]);
  //   } else {
  //     setFilteredStops(tourStopData.slice(0, numberOfStops));
  //   }
  // }, [selectedTransport, numberOfStops]);

  const handleTransportSelection = (
    transport: React.SetStateAction<string>
  ) => {
    setSelectedTransport(transport);

    switch (transport) {
      case "walk":
        setDuration("2h 5m");
        setNumberOfStops(10);
        break;
      case "bike":
        setDuration("38m");
        setNumberOfStops(7);
        break;
      case "bus":
        setDuration("40m");
        setNumberOfStops(4);
        break;
      case "taxi":
        setDuration("18m");
        setNumberOfStops(0);
        break;
      default:
        setDuration("2h 5m");
        setNumberOfStops(20);
    }
  };

  const getButtonStyle = (transport: string) => {
    return selectedTransport === transport
      ? "flex flex-col items-center bg-forest rounded-xl p-2"
      : "flex flex-col items-center p-2";
  };

  const getTextStyle = (transport: string) => {
    return selectedTransport === transport
      ? "text-center text-xs text-white font-medium"
      : "text-center text-xs text-darkforest font-medium";
  };

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 bg-white px-4 pt-2 ">
        <Text className="mt-4 mb-6 font-medium text-black text-base">
          Your tour
        </Text>

        <Maps />

        <Text className="mt-6 mb-6 font-medium text-black text-base">
          Details
        </Text>

        <View className="border-[0.5px] rounded-2xl border-gray mb-5">
          {/* Row 1 */}
          <View className="flex-row border-b-[0.5px] border-gray">
            <View className="flex-1 p-3 border-r-[0.5px] border-gray">
              <Text className="text-darkforest text-xs font-regular  text-right">
                Start
              </Text>
            </View>
            <View className="flex-1 p-3 ">
              <Text className="text-darkforest text-xs font-regular">
                Museo del Novecento
              </Text>
            </View>
          </View>

          {/* Row 2 */}
          <View className="flex-row border-b-[0.5px] border-gray ">
            <View className="flex-1 p-3 border-r-[0.5px] border-gray ">
              <Text className="text-darkforest text-xs font-regular text-right">
                Arrive
              </Text>
            </View>
            <View className="flex-1 p-3  ">
              <Text className="text-darkforest text-xs font-regular">
                San Babila{" "}
              </Text>
            </View>
          </View>

          {/* Row 3 */}
          <View className="flex-row border-b-[0.5px] border-gray">
            <View className="flex-1 p-3 border-r-[0.5px] border-gray">
              <Text className="text-darkforest text-xs font-regular text-right">
                Time
              </Text>
            </View>
            <View className="flex-1 p-3 ">
              <Text className="text-darkforest text-xs font-regular ">
                20 minutes
              </Text>
            </View>
          </View>

          <View className="flex-row  ">
            <View className="flex-1 p-3 border-r-[0.5px] border-gray">
              <Text className="text-darkforest text-xs font-regular text-right">
                N° stops
              </Text>
            </View>
            <View className="flex-1 p-3 ">
              <Text className="text-darkforest text-xs font-regular ">5</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-center gap-4 mb-6">
          <Image source={monster} className="w-[78px] h-[78px]" />
          <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 max-w-[250px]">
            <Text className="text-[#141D19] text-base font-bold">
              Well done!
            </Text>
            <Text className="text-[#141D19] text-xs font-light mt-1">
              With this tour you contribute to reducing pollution and making it
              a more sustainable city.
            </Text>
          </View>
        </View>

        {selectedTransport !== "taxi" && (
          <>
            <Text className="mt-4 mb-3 font-medium text-black text-base">
              Tour stages
            </Text>
            <View className="flex flex-column ">
              {filteredStops.map((stop, index) => (
                <React.Fragment key={index}>
                  <GreenLine />
                  <TourStops stop={stop} index={index} />
                </React.Fragment>
              ))}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}
