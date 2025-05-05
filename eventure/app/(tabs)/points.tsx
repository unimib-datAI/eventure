import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Points() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const monster = require("@/assets/images/monster.png");
  const disco = require("@/assets/images/disco.jpg");

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  const getAnswerStyle = (answer) => {
    if (selectedAnswer === null) return "border-gray";

    if (answer === "Arnaldo Pomodoro") {
      return selectedAnswer === answer
        ? "bg-forest border-forest text-white"
        : "border-gray";
    } else {
      return selectedAnswer === answer
        ? "bg-red-400 border-red-400"
        : "border-gray";
    }
  };

  const getTextStyle = (answer) => {
    if (selectedAnswer === null) return "text-darkforest";

    if (selectedAnswer === answer) {
      return answer === "Arnaldo Pomodoro" ? "text-white" : "text-[#FFFDFA]";
    } else {
      return "text-darkforest";
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 px-4 pt-2 bg-white">
        <Text className="mt-14 mb-4 font-medium text-black text-base"></Text>

        <View className="rounded-2xl overflow-hidden mb-5">
          <Image
            source={disco}
            className="w-full h-[200px]"
            resizeMode="cover"
          />

          <View className="absolute inset-0 bg-black/30 rounded-2xl" />

          <View className="absolute top-0 left-0 right-0 p-3">
            <Text className="text-white text-base font-bold mb-1">
              Disco in forma di rosa del deserto
            </Text>
          </View>
        </View>

        <Text className="text-base font-bold text-darkforest mb-4">
          Who created the Disco in forma di rosa del deserto, an Italian
          national heritage sculpture?
        </Text>

        <View className="mb-6">
          <TouchableOpacity
            className={`border-[0.5px] rounded-xl p-3 mb-3 ${getAnswerStyle(
              "Arnaldo Pomodoro"
            )}`}
            onPress={() => handleAnswerSelection("Arnaldo Pomodoro")}
            disabled={selectedAnswer !== null}
          >
            <Text
              className={`text-xs font-regular ${getTextStyle(
                "Arnaldo Pomodoro"
              )}`}
            >
              Arnaldo Pomodoro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`border-[0.5px] rounded-xl p-3 mb-3 ${getAnswerStyle(
              "Leonardo da Vinci"
            )}`}
            onPress={() => handleAnswerSelection("Leonardo da Vinci")}
            disabled={selectedAnswer !== null}
          >
            <Text
              className={`text-xs font-regular ${getTextStyle(
                "Leonardo da Vinci"
              )}`}
            >
              Leonardo da Vinci
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`border-[0.5px] rounded-xl p-3 ${getAnswerStyle(
              " Michelangelo"
            )}`}
            onPress={() => handleAnswerSelection(" Michelangelo")}
            disabled={selectedAnswer !== null}
          >
            <Text
              className={`text-xs font-regular ${getTextStyle(
                " Michelangelo"
              )}`}
            >
              Michelangelo
            </Text>
          </TouchableOpacity>
        </View>

        {showExplanation && (
          <View className="flex flex-row justify-center gap-4 mb-6 mt-6">
            <Image source={monster} className="w-[78px] h-[78px]" />
            <View className="border-[0.5px] border-grey rounded-2xl py-3 px-4 max-w-[250px]">
              <Text className="text-[#141D19] text-base font-bold">
                {selectedAnswer === "Arnaldo Pomodoro"
                  ? "Well done! Correct answer."
                  : "Wrong answer"}
              </Text>
              <Text className="text-[#141D19] text-xs font-light mt-1">
                Did you know that the "Disco in forma di rosa del deserto" was
                created by Arnaldo Pomodoro around 1990?
              </Text>
            </View>
          </View>
        )}

        {selectedAnswer !== null && (
          <TouchableOpacity
            className="bg-forest rounded-xl p-3 border-[1px] border-[#141D19] mt-28 mb-0"
            onPress={() => {
              setSelectedAnswer(null);
              setShowExplanation(false);
            }}
          >
            <Text className="text-base text-center font-medium text-[#FFFDFA]">
              {selectedAnswer === "Arnaldo Pomodoro" ? "Next" : "Try again"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
