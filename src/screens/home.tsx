import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { css } from "styled-components/native";
import AtomWrapper from "../components/atoms/AtomWrapper";
import MoleculeCardTask from "../components/molecules/MoleculeCardTask";
import MoleculeCardUserHome from "../components/molecules/moleculeCardUserHome";

const tasks = [
  {
    id: 1,
    text: "Mascotas",
    image: require("../../assets/pet.png"),
  },
  {
    id: 2,
    text: "Dueños",
    image: require("../../assets/check.png"),
  },
  {
    id: 3,
    text: "Encuestadores",
    image: require("../../assets/detail.png"),
  },
  {
    id: 4,
    text: "Administradores",
    image: require("../../assets/list.png"),
  },
];

const container = css`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
  padding: 30px;
`;

export default function App() {
  return (
    <AtomWrapper
      customCSS={css`
        padding: 30px;
      `}
    >
      <MoleculeCardUserHome
        gender="female"
        name="maria de los angeles"
        rol="Administrador"
      />
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
      >
        {tasks.map((item) => (
          <MoleculeCardTask
            key={item.id}
            {...item}
            onPress={() => console.log("hola")}
          />
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
}
