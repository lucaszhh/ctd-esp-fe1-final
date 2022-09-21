export interface Character {
    id: number;
    name: string;
    image: string;
    episode: string[];
    isFavorite: boolean;
}


export interface CharactersState {
    characters: Character[];
    favorites: Character[];
    pages: number;
    totalPages: number;
    loading: boolean;
    name: string;
}

