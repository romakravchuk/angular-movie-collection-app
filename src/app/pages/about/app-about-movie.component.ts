import { Component, OnInit } from '@angular/core';
import { ApplicationState, MovieItem } from '../../store/state/app.state';
import { selectMovieDetails, selectMovieId } from '../../store/selectors/app.selector';
import { select, Store } from '@ngrx/store';
import { getMovieByIdLoad } from '../../store/actions/app.actions';
import { filter } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-about-movie',
    templateUrl: 'app-about-movie.component.html',
})
export class AppAboutMovieComponent implements OnInit {
    movieItem$: Observable<MovieItem>;
    movieId$: Observable<string>;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Plot: string;
    imdbRating: string;
    Runtime: string;
    Genre: string;
    imdbID: string;
    selectedMovieId: string;
    isLoading = true;

    constructor(private store: Store<ApplicationState>) {
        this.movieItem$ = this.store.select(selectMovieDetails);
        this.movieId$ = this.store.pipe(
            filter((state) => state.router.state.params.id),
            select(selectMovieId)
        );

        combineLatest(this.movieItem$, this.movieId$).subscribe(
            ([{ Title, Year, Type, Poster, Plot, imdbRating, Runtime, Genre, isLoading, imdbID }, movieId]) => {
                if (movieId && imdbID === movieId) {
                    this.Title = Title;
                    this.Year = Year;
                    this.Type = Type;
                    this.Poster = Poster;
                    this.Plot = Plot;
                    this.imdbRating = imdbRating;
                    this.Runtime = Runtime;
                    this.Genre = Genre;
                    this.imdbID = imdbID;
                    this.isLoading = isLoading;
                }
                this.selectedMovieId = movieId;
            }
        );
    }

    ngOnInit(): void {
        if (this.selectedMovieId && this.imdbID !== this.selectedMovieId) {
            this.store.dispatch(getMovieByIdLoad({ movieId: this.selectedMovieId }));
        }
    }
}
