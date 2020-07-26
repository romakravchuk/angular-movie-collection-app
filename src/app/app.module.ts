import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppPagesModule } from './pages/app-pages.module';
import { reducers } from './store/reducers/app.reducers';
import { AppEffects } from './store/effects/app.effect';
import { environment } from '../environments/environment';
import { AppRoutes } from './app-routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSerializer } from './store/router-serializer/serializer';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({
            uiState: reducers,
            router: routerReducer,
        }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 5,
            logOnly: environment.production,
        }),
        RouterModule.forRoot(AppRoutes),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer,
        }),
        AppPagesModule,
        BrowserAnimationsModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
