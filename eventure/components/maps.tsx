import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker, UrlTile } from "react-native-maps";
import markerData from "../app/utils/markerdata";

const Maps = () => {
  return (
    <View className="h-[174px] border-[1px] border-grey rounded-2xl overflow-hidden">
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 45.4642, // Milano
          longitude: 9.19,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <UrlTile
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          zIndex={-1}
        />

        {markerData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
          >
            <Image
              source={marker.labelImage}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Maps;
