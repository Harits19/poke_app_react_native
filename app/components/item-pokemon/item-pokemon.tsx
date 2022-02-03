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
  const { onPress, onPressDelete } = props;


  return (
    <Pressable onPress={onPress}  >
      <View style={ITEM_CONTAINER} >
        <Text preset="header">Bulbasaur</Text>
        <AutoImage source={MORTY} style={IMAGE}  ></AutoImage>
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
