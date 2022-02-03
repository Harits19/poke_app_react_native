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
const ITEM_CONTAINER: ViewStyle = { elevation: 4, backgroundColor: "white", borderRadius: 16, padding: 16, margin: 4 }
const SCAFFOLD: ViewStyle = { backgroundColor: "white", flex: 1, padding: 16 }
const MORTY = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }
const IMAGE: ImageStyle = { height: 80, width: 80, alignSelf: "flex-end" }

const ICON: TextStyle = { fontSize: 40, alignSelf: "flex-start" }



export const PokebagScreen: FC<StackScreenProps<NavigatorParamList, "pokebag">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("pokemonDetail")

    return (
      <View style={SCAFFOLD}>
        <Text preset="header" >Pokebag</Text>
        <View style={PADDING} />
        <ScrollView scrollEnabled>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 11,].map((e, index) => {
            return (
              <View key={index}  >
                <ItemPokemon onPress={nextScreen} onPressDelete={() => {
                  console.log("press delete")
                }} />
              </View>
            )
          })}
        </ScrollView>


      </View>
    )
  },
)
