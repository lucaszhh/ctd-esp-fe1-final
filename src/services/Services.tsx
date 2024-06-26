import { URL_API } from "../constant/constant";

export const getCharacters = async ( page : string, name: string ) => {
    const character = await fetch( URL_API + "?" + new URLSearchParams({ page, name }));    
    return character.json();
}


export const getFavorites = async (favorites: number[]) => {
    const characterFavorites = await fetch(URL_API + favorites);
    const data = await characterFavorites.json();
    return Array.isArray(data) ? data : [data];
};