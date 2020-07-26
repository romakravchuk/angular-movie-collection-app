import { Action, createReducer, on } from '@ngrx/store';
import { getMovieByIdSuccess, getMovieByTitleLoad, getMovieByTitleSuccess } from '../actions/app.actions';
import { UiState, INITIAL_APPLICATION_STATE } from '../state/app.state';

const getMovieByTitleReducer = createReducer(
    INITIAL_APPLICATION_STATE,
    on(getMovieByTitleLoad, (state, { movieTitle }) => ({
        ...state,
        movieTitle,
        searchState: { ...state.searchState, isLoading: true },
    })),
    on(getMovieByTitleSuccess, (state, { searchState }) => ({
        ...state,
        searchState: { ...searchState, isLoading: false },
    })),
    on(getMovieByIdSuccess, (state, { movieItemState }) => ({
        ...state,
        movieItemState: { ...movieItemState, isLoading: false },
    }))
);

export function reducers(state: UiState, action: Action): UiState {
    return getMovieByTitleReducer(state, action);
}
