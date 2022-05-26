import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import screen1 from "./src/screens/screen1";
import screen2 from "./src/screens/screen2";
import home from "./src/screens/home";

export type RestaurantsStackParams = {
  screen1: undefined;
  screen2: undefined;
  home: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<RestaurantsStackParams>();

export function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="home">
      <HomeStackNavigator.Screen
        name="home"
        component={home}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <HomeStackNavigator.Screen name="screen1" component={home} />
      <HomeStackNavigator.Screen name="screen2" component={screen2} />

    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Feed",

          tabBarBadge: 10,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={screen2}
        options={{
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
