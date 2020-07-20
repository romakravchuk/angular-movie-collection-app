import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from '../../store/state/app.state';

@Component({
    selector: 'app-movie-card',
    templateUrl: 'app-movie-card.component.html',
})
export class AppMovieCardComponent implements OnInit {
    @Input() movieData: MovieItem;

    title: string;
    poster: string;
    year: string;
    type: string;
    movieDescriptionLink: string;

    constructor() {}

    ngOnInit(): void {
        const { Title, Poster, Year, Type, imdbID } = this.movieData;
        this.title = Title;
        this.poster = Poster;
        this.year = Year;
        this.type = Type;
        this.movieDescriptionLink = `/id/${imdbID}`;
    }
}
