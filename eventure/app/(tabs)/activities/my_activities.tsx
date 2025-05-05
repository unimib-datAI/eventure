import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, Image } from "react-native";
import Header from "@/components/header";
import Banner from "@/components/banner";

import Maps from "@/components/maps";
import Best_destination from "@/components/best_destination";
import Activity from "@/components/activity";
import DATABINGO from "@/app/utils/dataBingo";
import { router } from "expo-router";

export default function Activities() {
  const murales = require("@/assets/images/cordusio.jpg");
  const duomo = require("@/assets/images/duomoNapoli.png");
  const museoMadre = require("@/assets/images/museoMadre.png");
  const labelmonumenti = require("@/assets/images/monumenti.png");
  const labelmuseo = require("@/assets/images/labelMuseum.png");
  const destination = require("@/assets/images/destination.png");

  return (
    <ScrollView>
      <View className="flex-1 bg-white px-4 pt-14">
        <Header />
        <Text className="mt-4 mb-3 font-medium text-darkforest text-base">
          In base alle tue preferenze
        </Text>

        <Banner
          title={`Il tuo tour,\nle tue regole`}
          cta="Inizia il tour"
          imageUrl={murales}
          slug="/(tabs)/activities/preferences"
        />
        <Text className="mt-4 mb-3 font-medium text-darkforest text-base">
          Nelle tue vicinanze
        </Text>
        <Maps />
        <View className="flex flex-row justify-between">
          <Text className="mt-4 mb-3 font-medium text-darkforest text-base">
            Le 10 migliori destinazioni
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/activities/bestDestination")}
          >
            <Text className="mt-4 text-forest text-sm underline">
              Vedi tutte
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-3">
            <Best_destination
              labelImage={labelmonumenti}
              label="MONUMENTI"
              title="Duomo di Napoli"
              time={10}
              image={duomo}
            />
            <Best_destination
              labelImage={labelmuseo}
              label="MUSEI"
              title="Museo Madre Napoli"
              time={10}
              image={museoMadre}
            />
          </View>
        </ScrollView>

        <View className="my-4">
          <Banner
            title={`Tutte le destinazioni`}
            cta="Scopri"
            imageUrl={destination}
            slug="/(tabs)/activities/allDestination"
          />
        </View>
        <Text className="mb-3 font-medium text-darkforest text-base">
          Gioca Divertiti ed esplora la città
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-3">
            {DATABINGO.map((item, index) => (
              <Activity key={index} {...item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
