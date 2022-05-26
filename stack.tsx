import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import screen1 from "./src/screens/screen1";
import screen2 from "./src/screens/screen2";
import home from "./src/screens/home";


export type ExploreStackParams = {
  screen1: undefined;
  screen2: undefined;
  home: undefined;
};




const RootStack = createStackNavigator<ExploreStackParams>();
function MyStackCustom() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="home">
        <RootStack.Screen name="screen1" component={screen1} />
        <RootStack.Screen name="screen2" component={screen2} />
        <RootStack.Screen
        name="home"
        component={home}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default MyStackCustom;
