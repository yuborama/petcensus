import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import AtomContainer from "../components/atoms/AtomContainer";
import AtomWrapper from "../components/atoms/AtomWrapper";
import { TextSyle } from "../components/atoms/AtomText/style";
import MapView from "react-native-maps";
import AtomImage from "../components/atoms/AtomImage";

const Save = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 10px;
  /* background-color: bisque; */
  align-items: flex-start;
  width: 100%;
`;

const data = {
  owner: "Juan Daniel Garcia Peña",
  size: "Mediano",
  color: "Blanco",
  sterilized: true,
  sterilizedLocation: "en Perritos sin güevitas",
  silvestre: true,
  ccOwner: "1090347567",
  id: "1090765456-1",
  age: "2 meses",
  diseases: ["Enfermedad 1", "Enfermedad 2"],
  createdAt: "2020-06-01T00:00:00.000Z",
  direction: "Calle 1 Barrio Centro",
  location: "Casco Urbano",
  observations: "En caso de que tenga alguna observarcion",
  latitude: 33.640411,
  longitude: -84.419853,
};

const PetPage: FC = () => {
  return (
    <AtomContainer>
      <Save>
        <AtomWrapper
          backgroundColor="#167bd8"
          borderRadius="0 0 50px 50px"
          height="300px"
          alignItems="center"
          justifyContent="flex-end"
        >
          <AtomWrapper width="200px" height="200px" borderRadius="25px">
            <AtomImage
              customWidth="200px"
              customHeight="200px"
              customBorderRadius="25px"
              url="https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"
              source={0}
            />
            <AtomWrapper
              alignItems="center"
              backgroundColor="#00000069"
              borderRadius="0 0 25px 25px"
              padding="5px"
              customCSS={css`
                margin-top: -67px;
                height: max-content;
              `}
            >
              <TextSyle fontSize="25px" color="#ffffff">
                Cariñosito
              </TextSyle>
              <TextSyle fontSize="18px" color="#E0F0FF">
                Perro - Bulldog
              </TextSyle>
            </AtomWrapper>
          </AtomWrapper>
          <AtomWrapper
            backgroundColor="#167bd8"
            borderRadius="50%"
            height="100px"
            width="100px"
            border="5px solid #ffffff"
            alignItems="center"
            justifyContent="center"
            customCSS={css`
              margin-bottom: -50px;
            `}
          />
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            padding: 10px;
          `}
        >
          <AtomWrapper
            customCSS={css`
              flex-direction: row;
            `}
            style={Styles.container}
          >
            <AtomWrapper width="50%">
              <Text style={Styles.label}>Dueño</Text>
              <Text style={Styles.data}>{data.owner}</Text>
              <Text style={Styles.label}>Tamaño</Text>
              <Text style={Styles.data}>{data.size}</Text>
              <Text style={Styles.label}>Color</Text>
              <Text style={Styles.data}>{data.color}</Text>
              <Text style={Styles.label}>Esterilizado</Text>
              <Text style={Styles.data}>
                {data.sterilized ? `Si, ${data.sterilizedLocation}` : `No`}
              </Text>
              <Text style={Styles.label}>Animal Silvestre</Text>
              <Text style={Styles.data}>{data.silvestre ? `Si` : `No`}</Text>
            </AtomWrapper>
            <AtomWrapper width="50%">
              <Text style={Styles.label}>C.C. Dueño</Text>
              <Text style={Styles.data}>{data.ccOwner}</Text>
              <Text style={Styles.label}>ID de mascota</Text>
              <Text style={Styles.data}>{data.id}</Text>
              <Text style={Styles.label}>Edad</Text>
              <Text style={Styles.data}>{data.age}</Text>
              <Text style={Styles.label}>Enfermedades</Text>
              <Text style={Styles.data}>
                {data.diseases.map(
                  (disease, i) =>
                    `${disease}${i < data.diseases.length - 1 ? ", " : ""}`
                )}
              </Text>
              <Text style={Styles.label}>Fecha Registro</Text>
              <Text style={Styles.data}>{data.createdAt}</Text>
            </AtomWrapper>
          </AtomWrapper>
          <AtomWrapper
            customCSS={css`
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <MapView
              style={Styles.map}
              initialRegion={{
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04,
              }}
            />

            <AtomWrapper width="50%">
              <Text style={Styles.label}>Direccion</Text>
              <Text style={Styles.data}>{data.direction}</Text>
              <Text style={Styles.label}>Ubicacion</Text>
              <Text style={Styles.data}>{data.location}</Text>
            </AtomWrapper>
          </AtomWrapper>
          <Text style={Styles.label}>Observaciones</Text>
          <Text style={Styles.data}>{data.observations}</Text>
        </AtomWrapper>
      </Save>
    </AtomContainer>
  );
};

export default PetPage;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 50,
    paddingRight: 10,
  },
  label: {
    fontSize: 20,
    color: "#167BD8",
    fontWeight: "bold",
    fontFamily: "Inter",
    marginTop: 15,
  },
  data: {
    fontSize: 16,
    color: "#64707D",
    fontFamily: "Inter",
  },
  map: {
    width: 150,
    height: 100,
  },
});
