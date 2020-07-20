import { Params, RouterStateSnapshot, Data } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface AppRouterStateUrl {
    url: string;
    id: string;
}

export class CustomSerializer implements RouterStateSerializer<AppRouterStateUrl> {
    serialize(state: RouterStateSnapshot): AppRouterStateUrl {
        let currentRoute = state.root;

        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
        }

        const {
            url,
            root: { queryParams },
        } = state;
        const {
            params: { id },
        } = currentRoute;

        return { url, id };
    }
}
