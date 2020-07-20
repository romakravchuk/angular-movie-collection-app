import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieItem, SearchState } from '../store/state/app.state';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppPagesService {
    readonly baseApiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseApiUrl = environment.baseApiUrl;
    }

    searchMovies(movieTitle: string, pageNumber = 1): Observable<SearchState> {
        return this.httpClient.get<SearchState>(
            `${this.baseApiUrl}?apikey=f79aeba3&s=${movieTitle}&page=${pageNumber}`
        );
    }

    getMovieById(id: string): Observable<MovieItem> {
        return this.httpClient.get<MovieItem>(`${this.baseApiUrl}?apikey=f79aeba3&i=${id}&plot=full`);
    }
}
