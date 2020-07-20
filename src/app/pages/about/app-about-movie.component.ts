import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationState, MovieItem } from '../../store/state/app.state';
import { selectMovieId, selectMovieSearch, selectMovieTitle } from '../../store/selectors/app.selector';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-about-movie',
    templateUrl: 'app-about-movie.component.html',
})
export class AppAboutMovieComponent implements OnInit {
    searchState: MovieItem[];
    selectedMovieId: string;

    constructor(private store: Store<ApplicationState>) {
        // this.store.select(selectMovieSearch).subscribe((value) => {
        //     this.searchState = value;
        // });
        this.store.select(selectMovieId).subscribe((value) => {
            console.log('value', value);
        });
    }

    ngOnInit(): void {}
}
