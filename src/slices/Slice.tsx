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


export const loadCharacter = createThunk<Character[], void>(
  "searchCharacter",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { pages, name} = state.characters;
    const results = await getCharacters(
      pages.toString(),
      name
    );
    
    return results.results;
  }
);


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
      console.log(action.error)
    });

  },
});

