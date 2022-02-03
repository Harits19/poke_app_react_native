import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Pressable, View, ViewStyle } from "react-native"
import { Text } from "../text/text"

const HEADER: ViewStyle = { flexDirection: "row-reverse", justifyContent: "space-between" }

export function HeaderV2() {
  const { navigate } = useNavigation()

  return (
    <View style={HEADER}>
      <Pressable >
        <Text preset="header">Pokebag</Text>

      </Pressable>
    </View>
  )
}
