import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { css } from "styled-components/native";
import Navigation from "./navigation";
import AtomWrapper from "./src/components/atoms/AtomWrapper";
import MyStackCustom from "./stack";


const CustomStyles = css`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

export default function App() {
  return (
      <MyStackCustom />
    // <View>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
  );
}
