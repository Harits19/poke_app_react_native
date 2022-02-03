import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native"
import { IconTypes } from "../icon/icons"
import { TxKeyPath } from "../../i18n"

export interface ItemPokemonProps {
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  onPressDelete?: null | ((event: GestureResponderEvent) => void) | undefined;

  
}
