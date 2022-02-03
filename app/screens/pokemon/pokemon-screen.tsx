import React, { FC } from "react"
import { ImageStyle, Pressable, TextStyle, View, ViewStyle, } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  AutoImage,
  HeaderV2,
  Text,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler"
import { ItemPokemon } from "../../components/item-pokemon/item-pokemon"



const PADDING: ViewStyle = { height: 32 }
const SCAFFOLD: ViewStyle = { backgroundColor: "white", flex: 1, padding: 16 }




export const PokemonScreen: FC<StackScreenProps<NavigatorParamList, "pokemon">> = observer(
  ({ navigation }) => {

    const nextScreen = ()=> navigation.navigate("pokemonDetail")
    return (
      <View style={SCAFFOLD}>
        <HeaderV2 />
        <View style={PADDING} />
        <Text preset="header" >Pokedex</Text>
        <View style={PADDING} />
        <ScrollView scrollEnabled>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 11,].map((e, index) => {
            return (
              <View key={index}>
                <ItemPokemon onPress={nextScreen} />
              </View>
            )
          })}
        </ScrollView>


      </View>
    )
  },
)
