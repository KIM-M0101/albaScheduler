import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen.js";
import ScheduleScreen from "../screens/ScheduleScreen.js";
import ShiftSwapScreen from "../screens/ShiftSwapScreen.js";
import NoticeScreen from "../screens/NoticeScreen.js";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="ShiftSwap" component={ShiftSwapScreen} />
      <Stack.Screen name="Notice" component={NoticeScreen} />
    </Stack.Navigator>
  );
}
