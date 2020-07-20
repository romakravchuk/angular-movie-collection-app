import { Routes } from '@angular/router';
import { AppMainPageComponent } from './pages/main/app-main-page.component';
import { AppAboutMovieComponent } from './pages/about/app-about-movie.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AppMainPageComponent,
    },
    {
        path: 'id/:id',
        component: AppAboutMovieComponent,
    },
];
