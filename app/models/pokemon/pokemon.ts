import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Rick and Morty pokemon model.
 */
export const PokemonModel = types.model("Pokemon").props({
  id: types.maybe(types.string),
  name: types.maybe(types.string),
  url: types.maybe(types.string),

})

type PokemonType = Instance<typeof PokemonModel>
export interface Pokemon extends PokemonType {}
type PokemonSnapshotType = SnapshotOut<typeof PokemonModel>
export interface PokemonSnapshot extends PokemonSnapshotType {}
export const createPokemonDefaultModel = () => types.optional(PokemonModel, {})
