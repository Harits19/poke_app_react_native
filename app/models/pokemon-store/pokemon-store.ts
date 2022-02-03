import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PokemonModel, PokemonSnapshot } from "../pokemon/pokemon"
import { PokemonApi } from "../../services/api/pokemon-api"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty pokemons
 */
export const PokemonStoreModel = types
  .model("PokemonStore")
  .props({
    pokemons: types.optional(types.array(PokemonModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    savePokemons: (pokemonSnapshots: PokemonSnapshot[]) => {
      self.pokemons.replace(pokemonSnapshots)
    },
  }))
  .actions((self) => ({
    getPokemons: async () => {
      const pokemonApi = new PokemonApi(self.environment.api)
      const result = await pokemonApi.getPokemons()

      if (result.kind === "ok") {
        self.savePokemons(result.pokemons)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type PokemonStoreType = Instance<typeof PokemonStoreModel>
export interface PokemonStore extends PokemonStoreType {}
type PokemonStoreSnapshotType = SnapshotOut<typeof PokemonStoreModel>
export interface PokemonStoreSnapshot extends PokemonStoreSnapshotType {}
export const createPokemonStoreDefaultModel = () => types.optional(PokemonStoreModel, {})
