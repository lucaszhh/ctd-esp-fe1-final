import { URL_API } from "../constant/constant";

export const getCharacters = async ( page : string, name: string ) => {
    const character = await fetch( URL_API + new URLSearchParams({ page, name }));
    return character.json();
}

