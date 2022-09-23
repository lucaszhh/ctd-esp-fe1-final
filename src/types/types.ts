export interface Character {
    id: number;
    name: string;
    image: string;
    episode: string[];
    isFavorite: boolean;
}


export interface CharactersState {
    characters: Character[];
    charactersFavorites: Character[];
    favorites: number[];
    pages: number;
    totalPages: number;
    loading: boolean;
    name: string;
    error: boolean;
}

