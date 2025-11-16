import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeft, ChevronRight } from "lucide-react-native";

export default function AvailableTimeScreen() {
  return (
    <View className="flex-1 bg-gray-100 px-6 pt-16">

      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <ArrowLeft size={32} color="#000" />
          </TouchableOpacity>

          <Text className="text-xl font-bold text-black ml-4">
            근무 가능 시간
          </Text>
        </View>

        <TouchableOpacity>
          <Text className="text-base font-bold text-black">추가</Text>
        </TouchableOpacity>
      </View>

      {/* 근무 가능 시간 리스트 */}
      <ScrollView className="flex-1">

        {/* 1 */}
        <View className="bg-white rounded-3xl p-5 mb-4 shadow relative">
          <Text className="text-3xl font-medium text-black">12:00 - 14:00</Text>
          <Text className="text-xl text-black/60 mt-1">월</Text>

          <TouchableOpacity className="absolute right-6 top-6">
            <ChevronRight size={30} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 2 */}
        <View className="bg-white rounded-3xl p-5 mb-4 shadow relative">
          <Text className="text-3xl font-medium text-black">12:00 - 14:00</Text>
          <Text className="text-xl text-black/60 mt-1">화</Text>

          <TouchableOpacity className="absolute right-6 top-6">
            <ChevronRight size={30} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 요청 섹션 */}
        <Text className="text-xl font-medium mt-6 mb-2">요청</Text>

        <View className="bg-white rounded-3xl p-5 shadow">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold text-black">
              10.18 (토) - 10.24 (금)
            </Text>
            <TouchableOpacity>
              <ChevronRight size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
