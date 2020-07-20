import { createSelector } from '@ngrx/store';
import { ApplicationState, SearchState } from '../state/app.state';
import { AppRouterStateUrl } from '../router-serializer/serializer';

export const selectFromState = (state) => state.uiState;
export const selectSearchMovie = (state) => state.uiState.searchState;
export const selectQueryParamId = (state) => state.uiState.routerState;

export const selectMovieSearch = createSelector(selectSearchMovie, ({ Search }: SearchState) => Search);
export const selectMovieTotalResult = createSelector(
    selectSearchMovie,
    ({ totalResults }: SearchState) => totalResults
);
export const selectMovieTitle = createSelector(selectFromState, ({ movieTitle }: ApplicationState) => movieTitle);

export const selectMovieId = createSelector(selectQueryParamId, ({ id }: AppRouterStateUrl) => id);
