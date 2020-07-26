import { createAction, props } from '@ngrx/store';
import { MovieItem, SearchState } from '../state/app.state';

export const GetMovieByTitleLoadAction = '[GET_MOVIE_BY_TITLE API] GET_MOVIE_BY_TITLE LOAD';
export const GetMovieByIdLoadAction = '[GET_MOVIE_BY_ID API] GET_MOVIE_BY_ID LOAD';
export const GetMovieByTitleSuccessAction = '[GET_MOVIE_BY_TITLE API] GET_MOVIE_BY_TITLE SUCCESS';
export const GetMovieByIdSuccessAction = '[GET_MOVIE_BY_ID API] GET_MOVIE_BY_ID SUCCESS';
export const OnPageChangeMovieByTitleLoadAction =
    '[ON_PAGE_CHANGE_MOVIE_BY_TITLE API] ON_PAGE_CHANGE_MOVIE_BY_TITLE LOAD';

export const getMovieByTitleLoad = createAction(GetMovieByTitleLoadAction, props<{ movieTitle: string }>());
export const getMovieByTitleSuccess = createAction(GetMovieByTitleSuccessAction, props<{ searchState: SearchState }>());
export const onPageChangeMovieByTitleLoadAction = createAction(
    OnPageChangeMovieByTitleLoadAction,
    props<{ pageIndex: number; movieTitle: string }>()
);
export const getMovieByIdLoad = createAction(GetMovieByIdLoadAction, props<{ movieId: string }>());
export const getMovieByIdSuccess = createAction(GetMovieByIdSuccessAction, props<{ movieItemState: MovieItem }>());
