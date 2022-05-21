import React, { FC } from "react";
import AtomWrapper from "../../atoms/AtomWrapper";
import { StyleSheet, Text } from "react-native";
import { css } from "@emotion/native";
interface MoleculeCardUserDetailType {
  name?: string;
  ccOwner?: string;
  tel?: string;
  email?: string;
  location?: string;
  observation?: string;
}

const MoleculeCardUserDetail: FC<MoleculeCardUserDetailType> = (props) => {
  const { ccOwner, email, location, name, observation, tel } = props;
  return (
    <AtomWrapper
      customCSS={css`
        height: max-content;
        margin: 5px;
        padding: 10px;
        border: 1px solid #cdcdcd;
        border-radius: 25px;
      `}
    >
      <Text style={Styles.label}>Nombre</Text>
      <Text style={Styles.data}>{name}</Text>
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          width: max-content;
        `}
      >
        <AtomWrapper>
          <Text style={Styles.label}>Documento</Text>
          <Text style={Styles.data}>{ccOwner}</Text>
        </AtomWrapper>
        <AtomWrapper>
          <Text style={Styles.label}>Teléfono</Text>
          <Text style={Styles.data}>{tel}</Text>
        </AtomWrapper>
      </AtomWrapper>
      <Text style={Styles.label}>Correo Electronico</Text>
      <Text style={Styles.data}>{email}</Text>
      <Text style={Styles.label}>Dirección</Text>
      <Text style={Styles.data}>{location}</Text>
      <Text style={Styles.label}>Observaciones</Text>
      <Text style={Styles.data}>{observation}</Text>
    </AtomWrapper>
  );
};
export default MoleculeCardUserDetail;

const Styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 20,
    color: "#167BD8",
    fontWeight: "bold",
    fontFamily: "Inter",
    marginTop: 5,
  },
  data: {
    fontSize: 16,
    color: "#64707D",
    fontFamily: "Inter",
  },
});