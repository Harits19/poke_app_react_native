import { PokemonDetail } from './../../models/pokemon/pokemon-detail';
import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetPokemonsResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"
import { Pokemon } from "../../models/pokemon/pokemon"
import { GetPokemonDetailResult } from '.';

const API_PAGE_SIZE = 50

export class PokemonApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getPokemons(): Promise<GetPokemonsResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(
        "/pokemon",
      )

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const pokemons = response.data.results
      const pokemonUpdate: Pokemon[] = pokemons.map((e) => {
        const str = e.url.split("/");
        const id:string = str[str.length - 2]
        // console.log(id)
        return { name: e.name, url: e.url, id }
      })
      // console.log({pokemonUpdate})
      return { kind: "ok", pokemons: pokemonUpdate }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getDetailPokemon(id: string,): Promise<GetPokemonDetailResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `/pokemon/${id}`,
      )
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      console.log(response.data)
      const pokemonDetail: PokemonDetail = response.data
      console.log({pokemonDetail})
      return { kind: "ok", pokemonDetail }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
