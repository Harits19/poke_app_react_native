import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native"
import { IconTypes } from "../icon/icons"
import { TxKeyPath } from "../../i18n"
import { Pokemon } from "../../models/pokemon/pokemon"

export interface ItemPokemonProps {

  pokemon?: null |  Pokemon;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  onPressDelete?: null | ((event: GestureResponderEvent) => void) | undefined;

  
}
