import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Photoobject from "@/components/photoobject";
import WALKINGBINGO from "../utils/walkingbingo";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Walkingbingo = () => {
  const monster = require("../../assets/images/monster.png");
  const labelMuseum = require("../../assets/images/labelMuseum.png");
  const water = require("../../assets/images/water.png");
  const paint = require("../../assets/images/paint.png");
  const helmet = require("../../assets/images/helmet.png");
  const indication = require("../../assets/images/indication.png");
  const statue = require("../../assets/images/statue.png");

  const snapPoints = ["4%", "30%"];
  const sheetRef = useRef<BottomSheet>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState(0);

  const images = [
    labelMuseum,
    water,
    paint,
    helmet,
    indication,
    statue,
    labelMuseum,
  ];

  const handleUploadPhoto = () => {
    if (uploadedPhotos < 7) {
      setUploadedPhotos(uploadedPhotos + 1);
    }
  };

  const isButtonDisabled = uploadedPhotos === 7;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-white px-4 pt-10">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View className="flex flex-row justify-center gap-4">
            <Image source={monster} className="w-[78px] h-[78px]" />
            <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 w-[263px]">
              <Text className="text-[#141D19] text-base font-bold">
                Sei pronta a giocare?
              </Text>
              <Text className="text-[#141D19] text-xs font-light">
                Scatta le foto degli oggetti nelle caselle, completa il bingo e
                partecipa a una fantastica estrazione a premi!!
              </Text>
            </View>
          </View>

          <Text className="mt-2 font-medium text-black text-base">
            Gli oggetti da fotografare
          </Text>

          <View className="flex flex-col gap-2 mt-2 mb-4">
            {WALKINGBINGO.map((item, index) => (
              <Photoobject key={index} {...item} />
            ))}
          </View>
        </ScrollView>

        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={1}
          enablePanDownToClose={false}
          enableContentPanningGesture={true}
          enableHandlePanningGesture={true}
          handleIndicatorStyle={{ width: 50, backgroundColor: "#555" }}
          enableOverDrag={true}
        >
          <BottomSheetScrollView>
            <View className="flex flex-col justify-between items-center py-2">
              <Text className="text-sm text-darkforest font-regular ">
                {uploadedPhotos}/7 fotografie caricate
              </Text>
              <View className="flex flex-row justify-center item-center mt-[14px] gap-3">
                {images.map((image, index) => (
                  <View
                    key={index}
                    className={`p-2 border-[1.5px] rounded-lg ${
                      index < uploadedPhotos
                        ? "bg-[#4AB591] border-forest"
                        : "border-forest"
                    }`}
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {index >= uploadedPhotos ? (
                      <Image source={image} className="w-[20px] h-[20px]" />
                    ) : (
                      <Text className="text-white text-lg">✓</Text>
                    )}
                  </View>
                ))}
              </View>
              <TouchableOpacity
                className={`rounded-xl p-3 border-[1px] border-[#141D19] mt-4 w-[80%] ${
                  isButtonDisabled ? "bg-gray-400" : "bg-forest"
                }`}
                onPress={handleUploadPhoto}
                disabled={isButtonDisabled}
              >
                <Text className="text-base text-center font-medium text-[#FFFDFA]">
                  Carica una foto
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default Walkingbingo;
