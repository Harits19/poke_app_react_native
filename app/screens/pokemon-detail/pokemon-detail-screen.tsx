/* eslint-disable react-native/split-platform-components */
import React, { FC, useEffect } from "react"
import { ImageStyle, Pressable, TextStyle, ToastAndroid, View, ViewStyle, } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  AutoImage,
  Text,
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { ScrollView } from "react-native-gesture-handler"
import { useStores } from "../../models"
import { PokemonDetail } from "../../models/pokemon/pokemon-detail"
import { isEmpty } from "validate.js"



const PADDING: ViewStyle = { height: 32 }
const SCAFFOLD: ViewStyle = { flex: 1, padding: 16 }
const TYPE_CONTAINER: ViewStyle = { flexDirection: "row", flexWrap: "wrap" }
const TYPE: ViewStyle = { backgroundColor: "black", padding: 16, margin: 8, borderRadius: 16, }
const TEXT_TYPE: TextStyle = { color: "white", }
const DETAIL: ViewStyle = { backgroundColor: "white", borderRadius: 16, padding: 16 }

const POKE_BALL = { uri: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png" }
const IMAGE: ImageStyle = { height: 80, width: 80, alignSelf: "center" }
const BALL_CONTAINER: ViewStyle = { position: "absolute", elevation: 2, bottom: 0, alignSelf: "center" }

export const PokemonDetailScreen: FC<StackScreenProps<NavigatorParamList, "pokemonDetail">> = observer(
  ({ route }) => {

    const { pokemonStore } = useStores()

    const { pokemon } = route.params;

    const [detail, setPokemonDetail] = React.useState({ pokemonDetail: {} as PokemonDetail })

    const showToast = () => {
      pokemonStore.addPokebag(pokemon)
      if(isEmpty(pokemonStore.error)) return;
      ToastAndroid.show(pokemonStore.error, ToastAndroid.SHORT);
    };


    useEffect(() => {
      async function fetchData() {
        const result = await pokemonStore.getDetailPokemon(pokemon.id)
        setPokemonDetail({ pokemonDetail: result })
      }
      fetchData()
    }, [])

    const getImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

    // console.log(pokemonStore.pokebag)

    return (
      <View style={SCAFFOLD}>
        <View style={PADDING} />
        <ScrollView scrollEnabled>
          <Text preset="header" >{pokemon.name}</Text>
          <View style={PADDING} />
          <View style={TYPE_CONTAINER} >
            {(detail?.pokemonDetail?.types ?? []).map((e, index) => {
              return (
                <View key={index} style={TYPE} >
                  <Text preset="header" style={TEXT_TYPE} >{e?.type?.name ?? ""}</Text>
                </View>
              )
            })}
          </View>
          <View style={PADDING} />
          <AutoImage source={{ uri: getImageUrl }} style={IMAGE}  ></AutoImage>
          <View style={PADDING} />
          <View style={DETAIL} >
            <Text preset="header">Atributtes</Text>
            <View style={TYPE_CONTAINER} >
              {(detail?.pokemonDetail?.abilities ?? []).map((e, index) => {
                return (
                  <View key={index} style={TYPE} >
                    <Text preset="header" style={TEXT_TYPE} >{e?.ability?.name ?? ""}</Text>
                  </View>
                )
              })}
            </View>
            <Text preset="header">Moves</Text>
            <View style={TYPE_CONTAINER} >
              {(detail.pokemonDetail.moves ?? []).map((e, index) => {
                return (
                  <View key={index} style={TYPE} >
                    <Text preset="header" style={TEXT_TYPE} >{e?.move?.name ?? ""}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </ScrollView>
        <View style={BALL_CONTAINER}>
          <Pressable onPress={showToast}>
          <AutoImage source={POKE_BALL} style={IMAGE}></AutoImage>

          </Pressable>
        </View>
      </View>
    )
  },
)
