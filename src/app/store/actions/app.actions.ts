import { createAction, props } from '@ngrx/store';
import { SearchState } from '../state/app.state';
import { RouterState, StoreRouterConfig } from '@ngrx/router-store';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';

export const GetMovieByTitleLoadAction = '[GET_MOVIE_BY_TITLE API] GET_MOVIE_BY_TITLE LOAD';
export const GetMovieByTitleSuccessAction = '[GET_MOVIE_BY_TITLE API] GET_MOVIE_BY_TITLE SUCCESS';
export const OnPageChangeMovieByTitleLoadAction =
    '[ON_PAGE_CHANGE_MOVIE_BY_TITLE API] ON_PAGE_CHANGE_MOVIE_BY_TITLE LOAD';

export const getMovieByTitleLoad = createAction(GetMovieByTitleLoadAction, props<{ movieTitle: string }>());
export const getMovieByTitleSuccess = createAction(GetMovieByTitleSuccessAction, props<{ searchState: SearchState }>());
export const getRouterNavigationEnd = createAction(ROUTER_NAVIGATED, props<{ payload: any }>());
export const onPageChangeMovieByTitleLoadAction = createAction(
    OnPageChangeMovieByTitleLoadAction,
    props<{ pageIndex: number; movieTitle: string }>()
);
