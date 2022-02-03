import React, { FC, useEffect } from "react"
import { ImageStyle, Pressable, TextStyle, View, ViewStyle, } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  AutoImage,
  Text,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler"
import { ItemPokemon } from "../../components/item-pokemon/item-pokemon"
import { useStores } from "../../models"
import { Pokemon } from "../../models/pokemon/pokemon"



const PADDING: ViewStyle = { height: 32 }
const SCAFFOLD: ViewStyle = { backgroundColor: "white", flex: 1, padding: 16 }
const HEADER: ViewStyle = { flexDirection: "row-reverse", justifyContent: "space-between" }





export const PokemonScreen: FC<StackScreenProps<NavigatorParamList, "pokemon">> = observer(
  ({ navigation }) => {
    const { pokemonStore } = useStores()

    const { pokemons } = pokemonStore


    useEffect(() => {
      async function fetchData() {
        await pokemonStore.getPokemons()
      }

      fetchData()
    }, [])

    const nextScreen = (pokemon: Pokemon) => navigation.navigate('pokemonDetail', {
      pokemon: pokemon
    });

    const toPokebag = () => navigation.navigate("pokebag")
    return (
      <View style={SCAFFOLD}>
        <View style={HEADER}>
          <Pressable onPress={toPokebag}>
            <Text preset="header">Pokebag</Text>
          </Pressable>
        </View>
        <View style={PADDING} />
        <Text preset="header" >Pokedex</Text>
        <View style={PADDING} />
        <ScrollView scrollEnabled>
          {(pokemons ?? []).map((e, index) => {
            return (
              <View key={index}>
                <ItemPokemon pokemon={e} onPress={() => nextScreen(e)} />
              </View>
            )
          })}
        </ScrollView>


      </View>
    )
  },
)
