import { Character, CharactersState } from "../types/types";
import { getCharacters } from "../services/Services";
import {  createSlice } from "@reduxjs/toolkit";
import { LIMIT } from "../constant/constant";
import { createThunk } from "../Hook/Hook";


const initialState: CharactersState = {
  characters: [],
  favorites: [],
  pages: 1,
  name: "",
  totalPages: 0,
  loading: false
};


/**
 * @function loadCharacter 
 * 
 * @return {Character[]} 
 */



export const loadCharacter = createThunk<Character[], void>(
  "loadCharacter",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { pages, name } = state.characters;
    const results = await getCharacters(
      pages.toString(),
      name
    );
    const parseResults : Character[] = await results.results.map((character: Character) => {
      const {id, name, episode, image} = character;
      return { id, name, episode, image, isFavorite: false };
    })
    return parseResults;
  }
);



/**
 * @function charactersSlice : acepta el estado inicial, un objeto de funciones de reducción 
 * y el string name "nombre de segmento", y genera automáticamente creadores de acción y tipos de acción 
 * de reducers y el estado
 * 
 * @param {string} name
 * @param {CharactersState} initialState
 * @param {objet} reducers
 * 
 * @return {{ 
 * name : string, 
 * reducer : ReducerFunction, 
 * actions : Record<string, ActionCreator>, 
 * caseReducers: Record<string, CaseReducer>.
 * getInitialState: () => State
 * }}
 */

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pages === state.totalPages 
      ? alert("No existe una pag siguiente")
      : state.pages += LIMIT;
    },
    prevPage: (state) => {
      state.pages === LIMIT 
      ? alert("No existe una pag anterior")
      : state.pages -= LIMIT;
    },
    searchByName: (state, action) =>{
      state.name = action.payload;
    },
    addFavorite: (state, action) =>{
/*       const characters = state.characters;
      const newCharacters : Character[] = characters.map((character) => {
        if(character.id === action.payload){character.isFavorite = true}
        return character;
      });

      state.characters = newCharacters; */




      const favotites = action.payload
      favotites.isFavorite = true;
      state.favorites = [...state.favorites , favotites]
    },
    deleteFavorite: (state, action) => {
      const favorites = state.favorites
      const newFavorites = favorites.filter((character: Character)=> character.id !== action.payload )
      state.favorites = newFavorites;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(loadCharacter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadCharacter.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    });
    builder.addCase(loadCharacter.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      console.log(action.error)
    });
    builder.addDefaultCase(() => {});

  },
});

