import { useNavigation } from "@react-navigation/core"
import React from "react"
import { ImageStyle, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { AutoImage } from ".."
import { Text } from "../text/text"
import { ItemPokemonProps } from "./item-pokemon.props"
import { Icon } from "react-native-elements"


const MORTY = { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" }
const IMAGE: ImageStyle = { height: 80, width: 80, alignSelf: "flex-end" }
const ITEM_CONTAINER: ViewStyle = { elevation: 4, backgroundColor: "white", borderRadius: 16, padding: 16, margin: 4 }
const ICON: TextStyle = { fontSize: 40, alignSelf: "flex-start" }

const HEADER: ViewStyle = { flexDirection: "row-reverse", justifyContent: "space-between" }

export function ItemPokemon(props: ItemPokemonProps) {
  const { onPress, onPressDelete, pokemon, } = props



  const getImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

  return (
    <Pressable onPress={onPress}  >
      <View style={ITEM_CONTAINER} >
        <Text preset="header">{pokemon.name ?? ""}</Text>
        {pokemon && <AutoImage source={{ uri: getImageUrl}} style={IMAGE}  ></AutoImage>}
        {onPressDelete && <Icon
          onPress={onPressDelete}
          name='delete'
          type='material'
          iconStyle={ICON}
          tvParallaxProperties
        />}
      </View>
    </Pressable>
  )
}
