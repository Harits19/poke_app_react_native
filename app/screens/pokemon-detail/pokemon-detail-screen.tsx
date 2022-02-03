import React, { FC } from "react"
import { ImageStyle, Pressable, TextStyle, View, ViewStyle, } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  AutoImage,
  Text,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { ScrollView } from "react-native-gesture-handler"



const PADDING: ViewStyle = { height: 32 }
const SCAFFOLD: ViewStyle = { flex: 1, padding: 16 }
const TYPE_CONTAINER: ViewStyle = { flexDirection: "row", flexWrap: "wrap" }
const TYPE: ViewStyle = { backgroundColor: "black", padding: 16, margin: 8, borderRadius: 16, }
const TEXT_TYPE: TextStyle = { color: "white", }
const DETAIL: ViewStyle = { backgroundColor: "white", borderRadius: 16, padding: 16 }

const MORTY = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }
const POKE_BALL = { uri: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png" }
const IMAGE: ImageStyle = { height: 80, width: 80, alignSelf: "center" }
const BALL_CONTAINER: ViewStyle = { position: "absolute", elevation: 2, bottom: 0, alignSelf: "center"  }

export const PokemonDetailScreen: FC<StackScreenProps<NavigatorParamList, "pokemonDetail">> = observer(
  ({ navigation }) => {

    return (
      <View style={SCAFFOLD}>
        <View style={PADDING} />
        <ScrollView scrollEnabled>
          <Text preset="header" >Bulbasaur</Text>
          <View style={PADDING} />
          <View style={TYPE_CONTAINER} >
            {[1, 1].map((e, index) => {
              return (
                <View key={index} style={TYPE} >
                  <Text preset="header" style={TEXT_TYPE} >poison</Text>
                </View>
              )
            })}
          </View>
          <View style={PADDING} />
          <AutoImage source={MORTY} style={IMAGE}  ></AutoImage>
          <View style={PADDING} />
          <View style={DETAIL} >
            <Text preset="header">Atributtes</Text>
            <View style={TYPE_CONTAINER} >
              {[1, 1, 1, 1, 1, 11, 1, 1, 1, 1,].map((e, index) => {
                return (
                  <View key={index} style={TYPE} >
                    <Text preset="header" style={TEXT_TYPE} >poison</Text>
                  </View>
                )
              })}
            </View>
            <Text preset="header">Moves</Text>
            <View style={TYPE_CONTAINER} >
              {[1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1,].map((e, index) => {
                return (
                  <View key={index} style={TYPE} >
                    <Text preset="header" style={TEXT_TYPE} >poison</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </ScrollView>
        <View style={BALL_CONTAINER}>
          <AutoImage source={POKE_BALL} style={IMAGE}></AutoImage>
        </View>
      </View>
    )
  },
)
