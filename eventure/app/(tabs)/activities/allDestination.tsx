import { View, TextInput, TouchableOpacity, Image, ScrollView, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import tourStopsData from '@/app/utils/tourStopData';
import SuggestionDestination from '@/components/suggestionDestination';

const AllDestination = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);


  const filterCategories = [
    "MONUMENTO",
    "MUSEO",
    "TEATRO",
    "BAR E RISTORANTI",
    "PARCHI",
    "NEGOZI",
    "ATTRAZIONI"
  ];


  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };


  const resetFilters = () => {
    setSelectedFilters([]);
  };

  const filteredDestinations = tourStopsData.filter(dest => {
    const matchesSearch = dest.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(dest.label);
    return matchesSearch && matchesFilter;
  });

  return (
    <View className="flex-1 bg-white">
      <View className="px-4 pt-4">

       <TextInput
                            placeholder="Dove vuoi andare?"
                            className="p-3 border border-gray-300 rounded-lg mb-2.5"
                            value={searchText}
                            onChangeText={setSearchText}
                          />



        <View className="mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <TouchableOpacity
              className="bg-forest px-3 py-2 rounded-xl flex-row items-center"
              onPress={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            >
              <Text className="text-white text-sm font-medium">Filtro per tipologia</Text>
              <Text className="text-white ml-2">{isFilterMenuOpen ? "▲" : "▼"}</Text>
            </TouchableOpacity>

            <View className="flex-row">
              <TouchableOpacity onPress={resetFilters}>
                <Text className="text-[#898989] text-sm underline font-medium">Annulla</Text>
              </TouchableOpacity>

            </View>
          </View>


          {isFilterMenuOpen && (
            <View className="flex-row flex-wrap gap-2 mb-2">
              {filterCategories.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  className={`border rounded-full px-4 py-2 ${
                    selectedFilters.includes(filter) ? 'bg-green-100 border-green-700' : 'border-gray-300'
                  }`}
                  onPress={() => toggleFilter(filter)}
                >
                  <Text className={`${
                    selectedFilters.includes(filter) ? 'text-green-700' : 'text-gray-700'
                  }`}>
                    {filter.toLowerCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>


      <ScrollView className="px-4 pb-4" keyboardShouldPersistTaps="handled">
        <View className="gap-3">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push({
                  pathname: '/(tabs)/activities/stops',
                  params: {
                    ...dest,
                    image: Image.resolveAssetSource(dest.image).uri,
                  },
                })}
              >
                <SuggestionDestination
                  title={dest.title}
                  caption={dest.caption}
                  label={dest.label}
                  labelImage={dest.labelImage}
                  image={dest.image}
                />
              </TouchableOpacity>
            ))
          ) : (
            <View className="items-center mt-4">
              <Text className="mt-2">Nessuna destinazione trovata</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllDestination;