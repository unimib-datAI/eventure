"use client";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CornerUpRight, ArrowLeft, X } from "lucide-react-native";
import MarkerCard from "@/components/markerCard";

export default function Map() {
  const walk = require("../../assets/images/walk.png");
  const bus = require("../../assets/images/bus.png");
  const metro = require("../../assets/images/metro.png");
  const pin = require("../../assets/images/pin.png");

  const sheetRef = useRef<BottomSheet>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedDestination, setSelectedDestination] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<
    "walking" | "public" | "bike" | null
  >(null);
  const [estimatedTime, setEstimatedTime] = useState<string>("0 min");
  const [distance, setDistance] = useState<string>("0 km");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showStartButton, setShowStartButton] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [routeStarted, setRouteStarted] = useState(false);

  const [selectedRouteType, setSelectedRouteType] = useState<string | null>(
    null
  );
  const [selectedRouteDetails, setSelectedRouteDetails] = useState<{
    id: string;
    type: string;
    color: string;
    time: string;
    points: string;
    schedule: string;
    routeType: string;
    coordinates: { latitude: number; longitude: number }[];
  } | null>(null);

  const startPoint = { latitude: 45.4633, longitude: 9.1906 };

  // Updated marker data with Museo del Novecento as the first entry
  const markerData = [
    {
      title: "Museo del Novecento",
      caption: "Museum of Modern and Contemporary Art",
      coordinate: { latitude: 45.4633, longitude: 9.1906 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Museo Poldi Pezzoli",
      caption: "Museum of Ancient and Renaissance Art",
      coordinate: { latitude: 45.4686, longitude: 9.1919 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Monument to Giuseppe Missori",
      caption: "Equestrian monument dedicated to Giuseppe Missori",
      coordinate: { latitude: 45.4619, longitude: 9.1886 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Disco in forma di rosa del deserto",
      caption: "Contemporary artwork",
      coordinate: { latitude: 45.4658, longitude: 9.1853 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Cordusio",
      caption: "Importante piazza del centro di Milano",
      coordinate: { latitude: 45.4669, longitude: 9.1867 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Leonardo3",
      caption: "Museum and Exhibition",
      coordinate: { latitude: 45.4658, longitude: 9.1891 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Galleria Vittorio Emanuele",
      caption: "Historic shopping gallery",
      coordinate: { latitude: 45.4654, longitude: 9.19 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Monumento a Cesare Beccaria",
      caption: "Historic monument",
      coordinate: { latitude: 45.467, longitude: 9.192 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Sant Ambroeus Milano",
      caption: "Corso Giacomo Matteotti, 7",
      coordinate: { latitude: 45.4685, longitude: 9.1935 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
    {
      title: "Piazza San Babila",
      caption: "Historic square in Milan",
      coordinate: { latitude: 45.469, longitude: 9.195 },
      image: require("../../assets/images/musem.png"),
      labelImage: require("../../assets/images/labelMuseum.png"),
    },
  ];

  // Define the walking route legs with specific times
  const walkingRouteLegs = [
    {
      from: "Museo del Novecento",
      to: "Museo Poldi Pezzoli",
      time: "8 min",
      fromCoord: markerData[0].coordinate,
      toCoord: markerData[1].coordinate,
    },
    {
      from: "Museo Poldi Pezzoli",
      to: "Monument to Giuseppe Missori",
      time: "11 min",
      fromCoord: markerData[1].coordinate,
      toCoord: markerData[2].coordinate,
    },
    {
      from: "Monument to Giuseppe Missori",
      to: "Disco in forma di rosa del deserto",
      time: "10 min",
      fromCoord: markerData[2].coordinate,
      toCoord: markerData[3].coordinate,
    },
    {
      from: "Disco in forma di rosa del deserto",
      to: "Cordusio",
      time: "6 min",
      fromCoord: markerData[3].coordinate,
      toCoord: markerData[4].coordinate,
    },
  ];

  // Define the San Babila route legs with specific times
  const sanBabilaRouteLegs = [
    {
      from: "Museo del Novecento",
      to: "Leonardo3",
      time: "5 min",
      fromCoord: markerData[0].coordinate,
      toCoord: { latitude: 45.4658, longitude: 9.1891 },
    },
    {
      from: "Leonardo3",
      to: "Monumento a Cesare Beccaria",
      time: "8 min",
      fromCoord: { latitude: 45.4658, longitude: 9.1891 },
      toCoord: { latitude: 45.467, longitude: 9.192 },
    },
    {
      from: "Monumento a Cesare Beccaria",
      to: "Sant Ambroeus Milano",
      time: "3 min",
      fromCoord: { latitude: 45.467, longitude: 9.192 },
      toCoord: { latitude: 45.4685, longitude: 9.1935 },
    },
    {
      from: "Sant Ambroeus Milano",
      to: "Piazza San Babila",
      time: "3 min",
      fromCoord: { latitude: 45.4685, longitude: 9.1935 },
      toCoord: { latitude: 45.469, longitude: 9.195 },
    },
  ];

  interface Coordinate {
    latitude: number;
    longitude: number;
  }

  const calculateDistance = (
    point1: Coordinate,
    point2: Coordinate
  ): number => {
    const R = 6371;
    const dLat = ((point2.latitude - point1.latitude) * Math.PI) / 180;
    const dLon = ((point2.longitude - point1.longitude) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((point1.latitude * Math.PI) / 180) *
        Math.cos((point2.latitude * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  interface Route {
    id: string;
    type: string;
    color: string;
    time: string;
    points: string;
    schedule: string;
    routeType: string;
    coordinates: { latitude: number; longitude: number }[];
  }

  const generateRoutes = (destination: {
    latitude: number;
    longitude: number;
  }): Route[] => {
    const distance = calculateDistance(startPoint, destination);
    const routeTypes = ["L1", "R2", "201"];

    return routeTypes.map((type, index) => {
      let time = 0;
      switch (type) {
        case "L1":
          time = Math.round(distance * 15);
          break;
        case "R2":
          time = Math.round(distance * 10);
          break;
        case "201":
          time = Math.round(distance * 8);
          break;
        default:
          time = Math.round(distance * 10);
      }

      return {
        id: `route${index + 1}`,
        type: type,
        color: index === 0 ? "red" : index === 1 ? "blue" : "green",
        time: `${time} min`,
        points: `${Math.round(distance * 100)} points`, // Example points calculation
        schedule: "Every 15 mins", // Example schedule
        routeType: "public",
        coordinates: generateRealisticCoordinates(
          startPoint,
          destination,
          type
        ),
      };
    });
  };

  const isNearCoast = (coordinate: Coordinate): boolean => {
    return false;
  };

  const generateRealisticCoordinates = (
    start: Coordinate,
    end: Coordinate,
    type: string
  ): Coordinate[] => {
    const coordinates = [start];

    if (type === "L1") {
      const intermediate1 = {
        latitude: start.latitude + 0.01,
        longitude: start.longitude + 0.01,
      };
      const intermediate2 = {
        latitude: end.latitude - 0.01,
        longitude: end.longitude - 0.01,
      };

      if (!isNearCoast(intermediate1)) {
        coordinates.push(intermediate1);
      }
      if (!isNearCoast(intermediate2)) {
        coordinates.push(intermediate2);
      }
    } else if (type === "R2") {
      const intermediate1 = {
        latitude: start.latitude + 0.005,
        longitude: start.longitude + 0.005,
      };
      const intermediate2 = {
        latitude: end.latitude - 0.005,
        longitude: end.longitude - 0.005,
      };

      if (!isNearCoast(intermediate1)) {
        coordinates.push(intermediate1);
      }
      if (!isNearCoast(intermediate2)) {
        coordinates.push(intermediate2);
      }
    } else if (type === "201") {
      const intermediate1 = {
        latitude: start.latitude + 0.003,
        longitude: start.longitude + 0.003,
      };
      const intermediate2 = {
        latitude: end.latitude - 0.003,
        longitude: end.longitude - 0.003,
      };

      if (!isNearCoast(intermediate1)) {
        coordinates.push(intermediate1);
      }
      if (!isNearCoast(intermediate2)) {
        coordinates.push(intermediate2);
      }
    }

    coordinates.push(end);
    return coordinates;
  };

  const [suggestedRoutes, setSuggestedRoutes] = useState<
    Array<{
      id: string;
      type: string;
      color: string;
      time: string;
      points: string;
      schedule: string;
      routeType: string;
      coordinates: { latitude: number; longitude: number }[];
    }>
  >([]);
  const [filteredMarkers, setFilteredMarkers] = useState(markerData);
  const [activeRoute, setActiveRoute] = useState<
    "cordusio" | "sanBabila" | null
  >(null);

  useEffect(() => {
    console.log("Number of markers:", markerData.length);
    console.log(
      "Markers:",
      markerData.map((m) => m.title)
    );
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchQuery.length > 0) {
        const filtered = markerData.filter((marker) =>
          marker.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredMarkers(filtered);
      } else {
        setFilteredMarkers(markerData);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  const handleSelectDestination = (marker: {
    title?: string;
    caption?: string;
    coordinate: any;
    image?: any;
    labelImage?: any;
  }) => {
    setSelectedDestination(marker.coordinate);
    const routes = generateRoutes(marker.coordinate);
    setSuggestedRoutes(routes);
    setShowSuggestions(false);
    setFilteredMarkers([]);
    setSearchQuery("");
    sheetRef.current?.expand();
    calculateRoute(marker.coordinate);

    // Check if the selected marker is Cordusio or San Babila
    if (marker.title === "Cordusio") {
      setActiveRoute("cordusio");
    } else if (marker.title === "Piazza San Babila") {
      setActiveRoute("sanBabila");
    } else {
      setActiveRoute(null);
    }
  };

  const handleClose = () => {
    setSelectedDestination(null);
    setSelectedRouteDetails(null);
    setSelectedRoute(null);
    setSelectedRouteType(null);
    setSelectedTransport(null);
    setShowSuggestions(true);
    setShowStartButton(false);
    setRouteStarted(false);
    setSearchQuery("");
    sheetRef.current?.snapToIndex(1);
  };

  const handleGoBack = () => {
    if (routeStarted) {
      setRouteStarted(false);
      sheetRef.current?.snapToIndex(0);
    } else if (selectedRouteDetails) {
      setSelectedRouteDetails(null);
      setSelectedRoute(null);
      setSelectedRouteType(null);
      setSelectedTransport(null);
      setShowStartButton(false);
    } else if (selectedDestination) {
      setSelectedDestination(null);
      setShowSuggestions(true);
    }
  };

  const calculateRoute = (destination: {
    latitude: number;
    longitude: number;
  }) => {
    if (!destination) return;

    const distanceInKm = calculateDistance(startPoint, destination);
    let timeInMin = 0;

    switch (selectedTransport) {
      case "walking":
        timeInMin = distanceInKm * 15;
        break;
      case "public":
        timeInMin = distanceInKm * 10;
        break;
      case "bike":
        timeInMin = distanceInKm * 8;
        break;
      default:
        timeInMin = distanceInKm * 10;
    }

    setDistance(`${distanceInKm.toFixed(2)} km`);
    setEstimatedTime(`${Math.ceil(timeInMin)} min`);
  };

  const formatTime = (minutes: number): string => {
    if (minutes < 60) {
      return `${Math.ceil(minutes)} min`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = Math.ceil(minutes % 60);
      return `${hours} or${hours > 1 ? "e" : "a"} e ${remainingMinutes} min`;
    }
  };

  const calculateTransportTime = (
    distance: number,
    transport: "walking" | "public" | "bike"
  ): string => {
    let timeInMin = 0;

    switch (transport) {
      case "walking":
        timeInMin = distance * 30;
        break;
      case "public":
        timeInMin = distance * 10;
        break;
      case "bike":
        timeInMin = distance * 15;
        break;
      default:
        timeInMin = distance * 10;
    }

    return formatTime(timeInMin);
  };

  const generatePolyline = () => {
    if (!selectedDestination) return null;

    if (selectedRoute) {
      const route = suggestedRoutes.find((r) => r.id === selectedRoute);
      if (route) {
        return (
          <>
            <Polyline
              coordinates={[route.coordinates[0], route.coordinates[1]]}
              strokeColor={route.color}
              strokeWidth={3}
              lineDashPattern={[5, 5]}
            />
            <Polyline
              coordinates={route.coordinates.slice(
                1,
                route.coordinates.length - 1
              )}
              strokeColor={route.color}
              strokeWidth={3}
            />
            <Polyline
              coordinates={[
                route.coordinates[route.coordinates.length - 2],
                route.coordinates[route.coordinates.length - 1],
              ]}
              strokeColor={route.color}
              strokeWidth={3}
              lineDashPattern={[5, 5]}
            />
          </>
        );
      }
    }

    switch (selectedTransport) {
      case "walking":
        // If we're at Cordusio and walking is selected, show our predefined walking route
        if (
          selectedDestination.latitude === markerData[4].coordinate.latitude &&
          selectedDestination.longitude === markerData[4].coordinate.longitude
        ) {
          return (
            <>
              {walkingRouteLegs.map((leg, index) => (
                <Polyline
                  key={index}
                  coordinates={[leg.fromCoord, leg.toCoord]}
                  strokeColor="green"
                  strokeWidth={4}
                  lineDashPattern={[5, 5]} // Added dashed line pattern
                />
              ))}
            </>
          );
        }

        // If we're at San Babila and walking is selected, show the San Babila route
        if (
          selectedDestination.latitude === 45.469 &&
          selectedDestination.longitude === 9.195
        ) {
          return (
            <>
              {sanBabilaRouteLegs.map((leg, index) => (
                <Polyline
                  key={index}
                  coordinates={[leg.fromCoord, leg.toCoord]}
                  strokeColor="green"
                  strokeWidth={4}
                  lineDashPattern={[5, 5]} // Added dashed line pattern
                />
              ))}
            </>
          );
        }

        // Default walking route for other destinations
        return (
          <Polyline
            coordinates={[
              startPoint,
              {
                latitude: startPoint.latitude + 0.005,
                longitude: startPoint.longitude + 0.005,
              },
              {
                latitude: selectedDestination.latitude - 0.005,
                longitude: selectedDestination.longitude - 0.005,
              },
              selectedDestination,
            ]}
            strokeColor="green"
            strokeWidth={4}
            lineDashPattern={[5, 5]}
          />
        );
      case "public":
        return (
          <>
            <Polyline
              coordinates={[
                startPoint,
                {
                  latitude: startPoint.latitude + 0.005,
                  longitude: startPoint.longitude + 0.005,
                },
              ]}
              strokeColor="blue"
              strokeWidth={4}
              lineDashPattern={[5, 5]}
            />
            <Polyline
              coordinates={[
                {
                  latitude: startPoint.latitude + 0.005,
                  longitude: startPoint.longitude + 0.005,
                },
                selectedDestination,
              ]}
              strokeColor="blue"
              strokeWidth={4}
            />
          </>
        );
      case "bike":
        return (
          <Polyline
            coordinates={[
              startPoint,
              {
                latitude: startPoint.latitude + 0.003,
                longitude: startPoint.longitude + 0.003,
              },
              {
                latitude: selectedDestination.latitude - 0.003,
                longitude: selectedDestination.longitude - 0.003,
              },
              selectedDestination,
            ]}
            strokeColor="orange"
            strokeWidth={4}
          />
        );
      default:
        return null;
    }
  };

  const handleSheetChanges = (index: number) => {
    if (index === 0) {
      sheetRef.current?.snapToIndex(0);
    }
  };

  const handleTransportSelection = (
    transport: "walking" | "public" | "bike"
  ) => {
    setSelectedTransport(transport);

    // If we select walking and the destination is Cordusio or San Babila, set up our predefined walking route
    if (
      transport === "walking" &&
      selectedDestination &&
      ((selectedDestination.latitude === markerData[4].coordinate.latitude &&
        selectedDestination.longitude === markerData[4].coordinate.longitude) ||
        (selectedDestination.latitude === 45.469 &&
          selectedDestination.longitude === 9.195))
    ) {
      setShowStartButton(true);
    } else {
      setSelectedRoute(null);
      setShowStartButton(false);
    }

    sheetRef.current?.snapToIndex(0);
  };

  const handleStart = () => {
    if (
      selectedTransport === "walking" &&
      selectedDestination &&
      ((selectedDestination.latitude === markerData[4].coordinate.latitude &&
        selectedDestination.longitude === markerData[4].coordinate.longitude) ||
        (selectedDestination.latitude === 45.469 &&
          selectedDestination.longitude === 9.195))
    ) {
      setRouteStarted(true);
      sheetRef.current?.expand();
    } else if (selectedRouteDetails) {
      sheetRef.current?.expand();
    }
  };

  const handleRouteSelection = (routeId: string, routeType: string) => {
    const route = suggestedRoutes.find((r) => r.id === routeId);
    if (route) {
      setSelectedRoute(routeId);
      setSelectedRouteType(routeType);
      setSelectedTransport("public" as "walking" | "public" | "bike");
      setSelectedRouteDetails(route);
      sheetRef.current?.snapToIndex(0);
      setShowStartButton(true);
    }
  };

  const calculateTimeDistribution = (totalTime: string) => {
    const totalMinutes = Number.parseFloat(totalTime);
    const walkTime = (totalMinutes * 0.25).toFixed(0);
    const transportTime = (totalMinutes * 0.5).toFixed(0);
    const finalWalkTime = (totalMinutes * 0.25).toFixed(0);
    return { walkTime, transportTime, finalWalkTime };
  };

  const snapPoints = ["5%", "14%", "60%"];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 items-center justify-center">
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 45.4665, // Centered between all markers
            longitude: 9.1915,
            latitudeDelta: 0.025, // Slightly larger to show more area
            longitudeDelta: 0.025,
          }}
        >
          {selectedDestination && (
            <Marker coordinate={startPoint} title="Museo del Novecento">
              <Image
                source={pin}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            </Marker>
          )}

          {markerData.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              onPress={() => handleSelectDestination(marker)}
            >
              <Image
                source={marker.labelImage}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                }}
              />
            </Marker>
          ))}

          {generatePolyline()}
        </MapView>

        <View style={styles.topButtonsContainer}>
          <TouchableOpacity onPress={handleGoBack} style={styles.topButton}>
            <ArrowLeft color="#427C67" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClose} style={styles.topButton}>
            <X color="#427C67" size={24} />
          </TouchableOpacity>
        </View>

        {showStartButton && (
          <TouchableOpacity
            className="flex-row items-center"
            style={styles.startButton}
            onPress={handleStart}
          >
            <Text style={styles.startButtonText}> Start </Text>
            <CornerUpRight color="#ffff" size={24} />
          </TouchableOpacity>
        )}

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableOverDrag={false}
          onChange={handleSheetChanges}
        >
          <BottomSheetScrollView className="p-3">
            {routeStarted &&
            selectedTransport === "walking" &&
            selectedDestination ? (
              <View className="mt-6">
                <View className="flex flex-row justify-between items-center w-full mb-5">
                  <View className="flex flex-row items-center gap-2">
                    <Image className="h-[24] w-[24px]" source={walk} />
                    <Text> To Walk </Text>
                  </View>
                  <View>
                    <Text>
                      {" "}
                      {activeRoute === "sanBabila" ? "20 min" : "35 min"}{" "}
                    </Text>
                  </View>
                </View>
                <View className="flex gap-6 mb-5">
                  {activeRoute === "sanBabila"
                    ? // San Babila route legs
                      sanBabilaRouteLegs.map((leg, index) => (
                        <View key={index} style={styles.routeItemContainer}>
                          <View style={styles.routeItemContent}>
                            <View className="flex flex-row items-center gap-2">
                              <Image
                                className="h-[24] w-[24px]"
                                source={walk}
                              ></Image>
                              <View className="flex flex-col flex-1">
                                <Text
                                  className="text-sm font-regular text-forest"
                                  numberOfLines={1}
                                  ellipsizeMode="tail"
                                  style={styles.routeText}
                                >
                                  {index + 1}: {leg.from} → {leg.to}
                                </Text>
                                <Text className="text-xs text-blackforest">
                                  {leg.time}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      ))
                    : // Original Cordusio route legs
                      walkingRouteLegs.map((leg, index) => (
                        <View key={index} style={styles.routeItemContainer}>
                          <View style={styles.routeItemContent}>
                            <View className="flex flex-row items-center gap-2">
                              <Image
                                className="h-[24] w-[24px]"
                                source={walk}
                              ></Image>
                              <View className="flex flex-col flex-1">
                                <Text
                                  className="text-sm font-regular text-forest"
                                  numberOfLines={1}
                                  ellipsizeMode="tail"
                                  style={styles.routeText}
                                >
                                  {index + 1}: {leg.from} → {leg.to}
                                </Text>
                                <Text className="text-xs text-blackforest">
                                  {leg.time}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      ))}
                </View>
              </View>
            ) : selectedRouteDetails ? (
              <View className="mt-6">
                <View className="flex flex-row justify-between items-center w-full mb-5">
                  <View className="flex flex-row items-center gap-2">
                    <Image className="h-[24] w-[24px]" source={walk} />
                    <Text> {">"} </Text>
                    {selectedRouteDetails.type === "L1" ? (
                      <Image source={metro}></Image>
                    ) : (
                      <Image source={bus}></Image>
                    )}
                    <Text> {selectedRouteDetails.type} </Text>
                  </View>
                  <View>
                    <Text> {selectedRouteDetails.time} </Text>
                  </View>
                </View>
                <View className="flex gap-6 mb-5">
                  <View style={styles.routeItemContainer}>
                    <View style={styles.routeItemContent}>
                      <View className="flex flex-row items-center gap-2">
                        <Image
                          className="h-[24] w-[24px]"
                          source={walk}
                        ></Image>
                        <View className="flex flex-col flex-1">
                          <Text
                            className="text-sm font-regular text-forest"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.routeText}
                          >
                            Walk to {selectedRouteDetails.type}{" "}
                          </Text>
                          <Text className="text-xs text-blackforest">
                            {" "}
                            {
                              calculateTimeDistribution(
                                selectedRouteDetails.time
                              ).walkTime
                            }{" "}
                            min
                          </Text>
                        </View>
                      </View>
                      <Text className="text-sm text-blackforest">
                        at 09:41{" "}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.routeItemContainer}>
                    <View style={styles.routeItemContent}>
                      <View className="flex flex-row items-center gap-2">
                        {selectedRouteDetails.type === "L1" ? (
                          <Image source={metro}></Image>
                        ) : (
                          <Image source={bus}></Image>
                        )}
                        <View className="flex flex-col flex-1">
                          <Text
                            className="text-sm font-regular text-forest"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.routeText}
                          >
                            {selectedRouteDetails.type} -{" "}
                            {selectedDestination
                              ? markerData.find(
                                  (marker) =>
                                    marker.coordinate.latitude ===
                                      selectedDestination.latitude &&
                                    marker.coordinate.longitude ===
                                      selectedDestination.longitude
                                )?.title
                              : "Piazza Duomo"}
                          </Text>
                          <Text className="text-xs text-blackforest">
                            {" "}
                            {
                              calculateTimeDistribution(
                                selectedRouteDetails.time
                              ).transportTime
                            }{" "}
                            min
                          </Text>
                        </View>
                      </View>
                      <Text className="text-sm text-blackforest">
                        at 09:41{" "}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.routeItemContainer}>
                    <View style={styles.routeItemContent}>
                      <View className="flex flex-row items-center gap-2">
                        <Image
                          className="h-[24] w-[24px]"
                          source={walk}
                        ></Image>
                        <View className="flex flex-col flex-1">
                          <Text
                            className="text-sm font-regular text-forest"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.routeText}
                          >
                            Walk to your destination
                          </Text>
                          <Text className="text-xs text-blackforest">
                            {" "}
                            {
                              calculateTimeDistribution(
                                selectedRouteDetails.time
                              ).finalWalkTime
                            }{" "}
                            min
                          </Text>
                        </View>
                      </View>
                      <Text className="text-sm text-blackforest">
                        at 09:51{" "}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <>
                {searchQuery.length === 0 && showSuggestions && (
                  <>
                    <TextInput
                      placeholder="Dove vuoi andare?"
                      className="p-3 border border-gray-300 rounded-lg mb-2.5"
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                    />
                    <Text className="text-base font-regular mb-2.5">
                      Crowdit suggests:{" "}
                    </Text>
                    <View className="flex gap-2">
                      {markerData.map((marker, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleSelectDestination(marker)}
                        >
                          <View className="flex-row p-4 bg-gray-50 items-center rounded-lg shadow-sm">
                            <Image
                              source={marker.labelImage}
                              style={{ width: 30, height: 30, marginRight: 10 }}
                              resizeMode="contain"
                            />
                            <Text className="text-sm font-bold">
                              {marker.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </>
                )}

                {searchQuery.length > 0 && (
                  <>
                    <TextInput
                      placeholder="Dove vuoi andare?"
                      className="p-3 border border-gray-300 rounded-lg mb-2.5"
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                    />
                    <View className="flex flex-col gap-3">
                      {filteredMarkers.map((marker, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleSelectDestination(marker)}
                        >
                          <MarkerCard
                            title={marker.title}
                            caption={marker.caption}
                            label="Luogo"
                            labelImage={marker.labelImage}
                            image={marker.image}
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  </>
                )}

                {selectedDestination && (
                  <View className="mt-4">
                    <View className="mb-4">
                      <TextInput
                        placeholder="Inizio"
                        value="Museo del Novecento"
                        editable={false}
                        className="p-3 border border-gray-300 rounded-lg mb-2"
                      />
                      <TextInput
                        placeholder="Fine"
                        value={
                          markerData.find(
                            (marker) =>
                              marker.coordinate.latitude ===
                                selectedDestination.latitude &&
                              marker.coordinate.longitude ===
                                selectedDestination.longitude
                          )?.title || ""
                        }
                        editable={false}
                        className="p-3 border border-gray-300 rounded-lg"
                      />
                    </View>

                    <Text className="font-bold text-xl mb-2">
                      Choose your transport{" "}
                    </Text>

                    <View
                      style={{
                        borderRadius: 16,
                        overflow: "hidden",
                        borderWidth: 0.5,
                        borderColor: "#898989",
                        marginBottom: 20,
                      }}
                    >
                      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <TouchableOpacity
                          onPress={() => handleTransportSelection("walking")}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                            width: "50%",
                            backgroundColor:
                              selectedTransport === "walking" && !selectedRoute
                                ? "#eff6ff"
                                : "transparent",
                            borderRightWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderColor: "#898989",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginRight: 10,
                            }}
                          >
                            <Image
                              source={require("../../assets/images/walk.png")}
                              style={styles.transportIcon}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                marginTop: 5,
                              }}
                            >
                              Walk
                            </Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <View style={{ alignItems: "flex-end" }}>
                              <Text style={{ fontSize: 14 }}>
                                {selectedDestination.latitude ===
                                  markerData[4].coordinate.latitude &&
                                selectedDestination.longitude ===
                                  markerData[4].coordinate.longitude
                                  ? "35 min"
                                  : selectedDestination.latitude === 45.469 &&
                                    selectedDestination.longitude === 9.195
                                  ? "20 min"
                                  : calculateTransportTime(
                                      calculateDistance(
                                        startPoint,
                                        selectedDestination!
                                      ),
                                      "walking"
                                    )}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleTransportSelection("public")}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                            width: "50%",
                            backgroundColor:
                              selectedTransport === "public" && !selectedRoute
                                ? "#eff6ff"
                                : "transparent",
                            borderBottomWidth: 0.5,
                            borderColor: "#898989",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginRight: 10,
                            }}
                          >
                            <Image
                              source={require("../../assets/images/taxi.png")}
                              style={styles.transportIcon}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                marginTop: 5,
                              }}
                            >
                              Taxi
                            </Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <View style={{ alignItems: "flex-end" }}>
                              <Text style={{ fontSize: 14 }}>
                                {calculateTransportTime(
                                  calculateDistance(
                                    startPoint,
                                    selectedDestination!
                                  ),
                                  "public"
                                )}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleTransportSelection("bike")}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                            width: "50%",
                            backgroundColor:
                              selectedTransport === "bike" && !selectedRoute
                                ? "#eff6ff"
                                : "transparent",
                            borderRightWidth: 0.5,
                            borderColor: "#898989",
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginRight: 10,
                            }}
                          >
                            <Image
                              source={require("../../assets/images/bike.png")}
                              style={styles.transportIcon}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                marginTop: 5,
                              }}
                            >
                              Bike
                            </Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <View style={{ alignItems: "flex-end" }}>
                              <Text style={{ fontSize: 14 }}>
                                {calculateTransportTime(
                                  calculateDistance(
                                    startPoint,
                                    selectedDestination!
                                  ),
                                  "bike"
                                )}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>

                        <View style={{ width: "50%" }}></View>
                      </View>
                    </View>

                    <Text className="font-bold text-lg mt-6 mb-4 text-green-800">
                      The paths suggested by CrowdIT{" "}
                    </Text>
                    <View className="flex gap-2 mb-5">
                      {suggestedRoutes.map((route, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() =>
                            handleRouteSelection(route.id, route.routeType)
                          }
                          style={{
                            borderWidth: 1,
                            borderColor:
                              selectedRoute === route.id
                                ? "#16a34a"
                                : "#e5e7eb",
                            borderRadius: 8,
                            padding: 12,
                            backgroundColor:
                              selectedRoute === route.id
                                ? "#f0fdf4"
                                : "transparent",
                          }}
                        >
                          <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                              <Image
                                source={require("../../assets/images/walk.png")}
                                style={{
                                  width: 20,
                                  height: 20,
                                  marginRight: 4,
                                }}
                              />
                              <Text className="text-base mx-1">{">"}</Text>
                              <View
                                style={{
                                  backgroundColor:
                                    route.type === "L1" ? "#dc2626" : "#2563eb",
                                  paddingHorizontal: 8,
                                  paddingVertical: 2,
                                  borderRadius: 4,
                                }}
                              >
                                <Text
                                  style={{
                                    color: "white",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    textShadowColor: "rgba(0, 0, 0, 0.5)",
                                    textShadowOffset: { width: 0, height: 1 },
                                    textShadowRadius: 1,
                                  }}
                                >
                                  {route.type}
                                </Text>
                              </View>
                              {route.type === "L1" || route.type === "201" ? (
                                <>
                                  <Text className="text-base mx-1">{">"}</Text>
                                  <Image
                                    source={require("../../assets/images/walk.png")}
                                    style={{ width: 20, height: 20 }}
                                  />
                                </>
                              ) : null}
                            </View>
                            <View className="items-end">
                              <Text className="text-base font-semibold">
                                {route.time}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                )}
              </>
            )}
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  transportButton: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  transportIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  startButton: {
    position: "absolute",
    bottom: 50,
    right: 20,
    backgroundColor: "#427C67",
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 16,
    borderColor: "black",
    borderWidth: 1,
    boxShadow: "2px 2px 0px 0px rgba(1, 45, 23, 0.20)",
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  routeDetailContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 16,
  },
  routeDetailText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  topButtonsContainer: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  topButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  routeItemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    overflow: "hidden",
  },
  routeItemContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  routeText: {
    maxWidth: "90%",
  },
});
