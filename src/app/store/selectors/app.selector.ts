import { createSelector } from '@ngrx/store';
import { UiState, SearchState } from '../state/app.state';
import { AppRouterStateUrl } from '../router-serializer/serializer';

export const selectFromState = (state) => state.uiState;
export const selectSearchMovie = (state) => state.uiState.searchState;
export const selectQueryParamId = (state) => state.router.state;

export const selectMovieSearch = createSelector(selectSearchMovie, ({ Search }: SearchState) => Search);
export const selectMovieSearchState = createSelector(selectFromState, ({ searchState }) => searchState);
export const selectMovieTitle = createSelector(selectFromState, ({ movieTitle }: UiState) => movieTitle);
export const selectMovieId = createSelector(selectQueryParamId, ({ params }: AppRouterStateUrl) => params.id);

export const selectMovieDetails = createSelector(selectFromState, ({ movieItemState }: UiState) => movieItemState);
