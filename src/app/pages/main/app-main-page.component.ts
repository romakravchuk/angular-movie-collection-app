import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApplicationState, MovieItem } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { getMovieByTitleLoad, onPageChangeMovieByTitleLoadAction } from '../../store/actions/app.actions';
import { selectMovieSearch, selectMovieTotalResult, selectMovieTitle } from '../../store/selectors/app.selector';
import { PageEvent } from '@angular/material/paginator';

@Component({
    templateUrl: 'app-main-page.component.html',
})
export class AppMainPageComponent {
    searchState$: Observable<MovieItem[]>;
    totalMovieResultsState$: Observable<string>;
    movieTitleState: string;
    movieSearchForm = new FormGroup({
        title: new FormControl(''),
    });

    constructor(private store: Store<ApplicationState>) {
        this.searchState$ = this.store.select(selectMovieSearch);
        this.totalMovieResultsState$ = this.store.select(selectMovieTotalResult);
        this.store.select(selectMovieTitle).subscribe((value) => {
            this.movieTitleState = value;
        });
    }

    onSubmit(): void {
        this.store.dispatch(getMovieByTitleLoad({ movieTitle: this.movieSearchForm.value.title }));
    }

    onPageChange({ pageIndex }: PageEvent): void {
        this.store.dispatch(
            onPageChangeMovieByTitleLoadAction({ pageIndex: pageIndex + 1, movieTitle: this.movieTitleState })
        );
    }
}
