import { Character, CharactersState } from "../types/types";
import { getCharacters, getFavorites } from "../services/Services";
import {  createSlice } from "@reduxjs/toolkit";
import { LIMIT } from "../constant/constant";
import { createThunk } from "../Hook/Hook";


const initialState: CharactersState = {
  characters: [],
  favorites: [],
  charactersFavorites: [],
  pages: 1,
  name: "",
  totalPages: 0,
  loading: false,
  error: false,
};



export const loadCharacter = createThunk< { characters: Character[],  totalPage: number },  void>(
  "loadCharacter",
  async (_, thunkAPI) => {
    const { characters } = thunkAPI.getState();
    const { pages, name, favorites } = characters;
    const results = await getCharacters(
      pages.toString(),
      name,
    );
    console.log(results);
    
    const totalPages: number = results.info.pages;
    const parseResults : Character[] = await results.results.map((character: Character) => {
      const {id, name, episode, image} = character;      
      const isFavorite: boolean = favorites.includes(id);
      return { id, name, episode, image, isFavorite: isFavorite };
    })
    return {characters: parseResults, totalPage:totalPages};
  }
);


export const loadCharacterFavorites = createThunk< Character[], void >(
  "loadCharacterFavorites",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { favorites } = state.characters;

    const getCharactersFavorites: Character[]  = await getFavorites(favorites); 

    const parseResults: Character[] = getCharactersFavorites.map((character: Character) => {
      const {id, name, episode, image} = character;      
      return { id, name, episode, image, isFavorite: true }
    })
    return parseResults;
  }
)


/**
 * @function charactersSlice : acepta el estado inicial, un objeto de funciones de reducción 
 * y el string name "nombre de segmento", y genera automáticamente creadores de acción y tipos de acción 
 * de reducers y el estado
 * 
 * @param {string} name
 * @param {CharactersState} initialState
 * @param {objet} reducers
 * 
 * @returns {{ 
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
      state.pages += LIMIT;
    },
    prevPage: (state) => {
      state.pages -= LIMIT;
    },
    searchByName: (state, action: { payload: string }) =>{
      state.name = action.payload;
      state.pages = LIMIT;
    },
    addFavorite: (state, action: { payload: number }) => {
      state.favorites = [...state.favorites , action.payload];
    },
    deleteFavorite: (state, action: { payload: number }) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCharacter.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(loadCharacter.fulfilled, (state, action) => {
      state.characters = action.payload.characters;
      state.totalPages = action.payload.totalPage;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(loadCharacter.rejected, (state) => {
      state.loading = false;
      state.characters = [];
      state.totalPages = LIMIT;
      state.error = true;
    });
    builder.addCase(loadCharacterFavorites.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(loadCharacterFavorites.fulfilled, (state, action: { payload: Character[] }) => {
      state.loading = false;
      state.error = false;
      state.charactersFavorites = action.payload;
    });
    builder.addCase(loadCharacterFavorites.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addDefaultCase(() => {});
  }
});

