interface Ratings {
    Source: string;
    Value: string;
}

export interface MovieItem {
    Title: string;
    Poster: string;
    Year: string;
    Type: string;
    imdbID: string;
    Plot: string;
    imdbRating: string;
    Runtime: string;
    Genre: string;
    isLoading: boolean;
    [propName: string]: string | boolean | Ratings[];
}

export interface SearchState {
    Search: MovieItem[];
    totalResults: string | number;
    Response: string;
    Error: string;
    isLoading: boolean;
    pageIndex: number;
}

export interface ApplicationState {
    router: any;
    uiState: UiState;
}
export interface UiState {
    searchState: SearchState;
    movieItemState: MovieItem;
    movieTitle: string;
}

export const INITIAL_APPLICATION_STATE: UiState = {
    searchState: {
        Search: [],
        totalResults: '0',
        Response: 'false',
        Error: '',
        isLoading: true,
        pageIndex: 0,
    },
    movieItemState: {
        Title: '',
        Year: '',
        Type: '',
        Poster: '',
        Plot: '',
        imdbRating: '',
        Runtime: '',
        Genre: '',
        imdbID: '',
        isLoading: true,
    },
    movieTitle: '',
};
