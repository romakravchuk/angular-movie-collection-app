import { Action, createReducer, on } from '@ngrx/store';
import { getMovieByTitleLoad, getMovieByTitleSuccess, getRouterNavigationEnd } from '../actions/app.actions';
import { ApplicationState, INITIAL_APPLICATION_STATE } from '../state/app.state';

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
    on(getRouterNavigationEnd, (state, { payload: { routerState } }) => {
        console.log(routerState, 'routerState');
        return {
            ...state,
            routerState: { url: routerState.url, id: routerState.params.id },
        };
    })
);

export function reducers(state: ApplicationState, action: Action): ApplicationState {
    return getMovieByTitleReducer(state, action);
}
