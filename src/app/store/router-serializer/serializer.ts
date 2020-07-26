import { Params, RouterStateSnapshot, Data } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface AppRouterStateUrl {
    url: string;
    params: Params;
}

export class CustomSerializer implements RouterStateSerializer<AppRouterStateUrl> {
    serialize(state: RouterStateSnapshot): AppRouterStateUrl {
        let currentRoute = state.root;

        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
        }

        const { url } = state;
        const { params } = currentRoute;

        return { url, params };
    }
}
