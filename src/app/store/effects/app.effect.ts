import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppPagesService } from '../../pages/app-pages.service';
import {
    GetMovieByTitleLoadAction,
    GetMovieByTitleSuccessAction,
    onPageChangeMovieByTitleLoadAction,
} from '../actions/app.actions';

@Injectable()
export class AppEffects {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GetMovieByTitleLoadAction),
            mergeMap(({ movieTitle }) =>
                this.appPagesService.searchMovies(movieTitle).pipe(
                    map((searchState) => ({ type: GetMovieByTitleSuccessAction, searchState })),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    onMoviePageChange$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onPageChangeMovieByTitleLoadAction),
            mergeMap(({ movieTitle, pageIndex }) => {
                return this.appPagesService.searchMovies(movieTitle, pageIndex).pipe(
                    map((searchState) => ({ type: GetMovieByTitleSuccessAction, searchState })),
                    catchError(() => EMPTY)
                );
            })
        )
    );

    constructor(private actions$: Actions, private appPagesService: AppPagesService) {}
}
