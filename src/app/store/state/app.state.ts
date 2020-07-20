import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState, RouterState } from '@ngrx/router-store';
import { Action, ActionReducer } from '@ngrx/store';
import { AppRouterStateUrl } from '../router-serializer/serializer';

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
    [propName: string]: string | Ratings[];
}

export interface SearchState {
    Search: MovieItem[];
    totalResults: string;
    Response: string;
    isLoading: boolean;
}

export interface ApplicationState {
    searchState: SearchState;
    movieItemState: MovieItem;
    movieTitle: string;
    routerState: AppRouterStateUrl;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    searchState: {
        Search: [],
        totalResults: '0',
        Response: 'false',
        isLoading: true,
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
    },
    movieTitle: '',
    routerState: {
        id: '',
        url: '',
    },
};
