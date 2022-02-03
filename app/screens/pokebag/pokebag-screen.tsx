import React, { FC } from "react"
import { View, ViewStyle, } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Text,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { ScrollView } from "react-native-gesture-handler"
import { ItemPokemon } from "../../components/item-pokemon/item-pokemon"
import { useStores } from "../../models"



const PADDING: ViewStyle = { height: 32 }
const SCAFFOLD: ViewStyle = { backgroundColor: "white", flex: 1, padding: 16 }




export const PokebagScreen: FC<StackScreenProps<NavigatorParamList, "pokebag">> = observer(
  () => {

    const { pokemonStore } = useStores()

    const { pokebag } = pokemonStore

    return (
      <View style={SCAFFOLD}>
        <Text preset="header" >Pokebag</Text>
        <View style={PADDING} />
        <ScrollView scrollEnabled>
          {(pokebag ?? [] ).map((e, index) => {
            return (
              <View key={index}  >
                <ItemPokemon pokemon={e}  onPress={() =>{
                  console.log("press")
                }} onPressDelete={() => {
                  pokemonStore.removePokebag(index)
                }} />
              </View>
            )
          })}
        </ScrollView>


      </View>
    )
  },
)
