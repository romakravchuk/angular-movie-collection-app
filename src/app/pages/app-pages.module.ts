import { NgModule } from '@angular/core';
import { AppMainPageComponent } from './main/app-main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppPagesService } from './app-pages.service';
import { CommonModule } from '@angular/common';
import { AppMovieCardComponent } from '../components/movie-card/app-movie-card.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AppAboutMovieComponent } from './about/app-about-movie.component';

@NgModule({
    imports: [ReactiveFormsModule, CommonModule, RouterModule, MatPaginatorModule, MatIconModule],
    declarations: [AppMainPageComponent, AppMovieCardComponent, AppAboutMovieComponent],
    exports: [AppMainPageComponent],
    providers: [AppPagesService],
})
export class AppPagesModule {}
