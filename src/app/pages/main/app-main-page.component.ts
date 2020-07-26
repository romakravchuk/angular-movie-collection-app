import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UiState, MovieItem, SearchState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { getMovieByTitleLoad, onPageChangeMovieByTitleLoadAction } from '../../store/actions/app.actions';
import { selectMovieSearch, selectMovieTitle, selectMovieSearchState } from '../../store/selectors/app.selector';
import { PageEvent } from '@angular/material/paginator';

@Component({
    templateUrl: 'app-main-page.component.html',
    styleUrls: ['main-page.scss'],
})
export class AppMainPageComponent {
    searchState$: Observable<MovieItem[]>;
    errorState: string;
    totalMovieResultsState: string | number;
    isLoadingSearchState: boolean;
    movieTitleState: string;
    pageIndex: number;
    movieSearchForm = new FormGroup({
        title: new FormControl(''),
    });
    isLoading = true;

    constructor(private store: Store<UiState>) {
        this.searchState$ = this.store.select(selectMovieSearch);
        this.searchState$.subscribe((value) => {
            if (value && value.length) {
                this.isLoading = false;
            }
        });
        this.store
            .select(selectMovieSearchState)
            .subscribe(({ totalResults, isLoading, pageIndex, Error }: SearchState) => {
                this.totalMovieResultsState = totalResults;
                this.errorState = Error;
                this.isLoadingSearchState = isLoading;
                this.pageIndex = pageIndex;
            });
        this.store.select(selectMovieTitle).subscribe((value) => {
            this.movieTitleState = value;
        });
    }

    onSubmit(): void {
        this.store.dispatch(getMovieByTitleLoad({ movieTitle: this.movieSearchForm.value.title }));
        this.isLoading = false;
    }

    onPageChange({ pageIndex }: PageEvent): void {
        this.store.dispatch(onPageChangeMovieByTitleLoadAction({ pageIndex, movieTitle: this.movieTitleState }));
    }
}
