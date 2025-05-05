import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const walkingbingoInfo = () => {
  const ebike = require("../../assets/images/ebike.png");
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 bg-white px-4 pt-3 flex-col gap-6  ">
        <Text className="text-darkforest text-lg font-medium">
          Walking Bingo
        </Text>

        <View className="border-[0.5px] rounded-2xl border-gray p-3 mt-4">
          <View className="flex flex-col">
            <Text className="text-darkforest text-sm font-medium ">
              Come vincere?
            </Text>
            <Text className="text-darkforest text-xs font-light">
              Completa tutte le missioni fotografiche richieste nell'app per
              ottenere premi. Ogni foto convalidata ti avvicina alla vittoria!
            </Text>
          </View>
        </View>

        <View className="border-[0.5px] rounded-2xl border-gray p-3 mt-4">
          <View className="flex flex-col ">
            <Text className="text-darkforest text-sm font-medium ">
              Come verificare?
            </Text>
            <Text className="text-darkforest text-xs font-light ">
              • Scatta una foto con l'app di Walking Bingo all'oggetto o punto
              di interesse richiesto
            </Text>
            <Text className="text-darkforest text-xs font-light ">
              • Carica la foto direttamente nell'app tramite il bottone{" "}
              <Text className="font-bold text-darkforest font-regular ">
                "Carica foto"
              </Text>
            </Text>
            <Text className="text-darkforest text-xs font-light ">
              • È possibile inviare una sola foto per missione e ogni foto deve
              essere inviata entro la fine del giorno per essere valida
            </Text>
            <Text className="text-darkforest text-xs font-light ">
              • Ogni oggetto deve essere riconoscibile e visibile nella foto
            </Text>
            <Text className="text-darkforest text-xs font-light ">
              • Completa tutte le missioni per ottenere il premio finale
            </Text>
            <Text className="text-darkforest text-xs font-light ">
              • Se pensi che una tua foto debba essere accettata e non lo è,
              puoi contattarci scrivendo a{" "}
              <Text className="underline">help@eventure.com</Text>
            </Text>
            <Text className="text-darkforest text-sm font-medium  mt-3">
              Esempio
            </Text>
            <View className="flex items-center">
              <Image source={ebike} className="mt-4 " />
            </View>
          </View>
        </View>

        <View className="items-center mt-4 mb-4 ">
          <Pressable
            className="rounded-xl p-3 border-[1px] border-[#141D19] w-[80%] bg-forest"
            onPress={() => router.back()}
          >
            <Text className="text-base text-center font-medium text-[#FFFDFA]">
              Carica una foto
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default walkingbingoInfo;
