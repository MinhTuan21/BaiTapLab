import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChoBanScreen from "./Album";
import TrucTiepScreen from "./Setting";
import TroChoiScreen from "./Infomation";

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#463267" },
        tabBarIndicatorStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#bbb",
      }}
    >
      <TopTab.Screen name="Album" component={ChoBanScreen} />
      <TopTab.Screen name="Informations" component={TroChoiScreen} />
      <TopTab.Screen name="Settings" component={TrucTiepScreen} />
    </TopTab.Navigator>
  );
}

export default TopTabNavigator;
