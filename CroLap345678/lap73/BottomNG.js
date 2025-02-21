import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import TopTabNavigator from "./TopTabNG";
import ChoBanScreen from "./Album";
import TrucTiepScreen from "./Setting";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Profile") iconName = "person";
          else if (route.name === "Setting") iconName = "settings";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#463267",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white", paddingBottom: 5 },
      })}
    >
      <BottomTab.Screen name="Home" component={TopTabNavigator} />
      <BottomTab.Screen name="Profile" component={ChoBanScreen} />
      <BottomTab.Screen name="Setting" component={TrucTiepScreen} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
