import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Pokemon, PokemonSnapshot } from "../pokemon/pokemon"
import { PokemonApi } from "../../services/api/pokemon-api"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty pokemons
 */
export const PokemonStoreModel = types
  .model("PokemonStore")
  .props({
    pokemons: types.frozen(null),
    pokebag: types.frozen([]),
    isSuccessCatch: types.optional(types.boolean, true),
    error:  types.frozen(null),


  })
  .extend(withEnvironment)
  .actions((self) => ({
    savePokemons: (pokemonSnapshots: PokemonSnapshot[]) => {
      self.pokemons.replace(pokemonSnapshots)
    },
    savePokebag: (pokemon: Pokemon) => {
      self.pokebag = [...self.pokebag, pokemon ]
      
    },

    removePokebag: (index: number) => {
      const temp = [...self.pokebag]
      temp.splice(index, 1)
      self.pokebag = temp
      
    },
  }))
  .actions((self) => ({
    getPokemons: async () => {
      const pokemonApi = new PokemonApi(self.environment.api)
      const result = await pokemonApi.getPokemons()
      console.log(result)

      if (result.kind === "ok") {
        self.savePokemons(result.pokemons)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },

    getDetailPokemon: async (id: string) => {

      const pokemonApi = new PokemonApi(self.environment.api)
      const result = await pokemonApi.getDetailPokemon(id)

      if (result.kind === "ok") {
        console.log(result.pokemonDetail)
        return result.pokemonDetail
      } else {

        return null;
        // __DEV__ && console.tron.log(result.kind)
      }

    },

    addPokebag: async (pokemon: Pokemon) => {
      if (self.isSuccessCatch) {
        self.savePokebag(pokemon)
        self.error = ""
      }else{
        self.error = `Gagal Tangkap ${pokemon.name}`
      }
      self.isSuccessCatch = !self.isSuccessCatch
    },


  }))

type PokemonStoreType = Instance<typeof PokemonStoreModel>
export interface PokemonStore extends PokemonStoreType { }
type PokemonStoreSnapshotType = SnapshotOut<typeof PokemonStoreModel>
export interface PokemonStoreSnapshot extends PokemonStoreSnapshotType { }
export const createPokemonStoreDefaultModel = () => types.optional(PokemonStoreModel, {})
