class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    loadRoute(...urlSegs) {
        const matchedRoute = this._mathUrlToRoute(urlSegs)

        const url = `/${urlSegs.join('/')}`;
        history.pushState({}, 'this works!', url);

        const routerOutElement = document.querySelectorAll('[data-router]')[0];
        routerOutElement.innerHTML = matchedRoute.template;
    }

    _mathUrlToRoute(urlSegs) {
        const matchedRoute = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1);

            if (routePathSegs.length !== urlSegs.length) {
                return false;
            }

            return routePathSegs
                .every((routePathSeg, i) => routePathSeg === urlSegs[i]);
        });

        return matchedRoute;
    }

    _loadInitialRoute() {
        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1? pathNameSplit.slice(1) : ''; 
    
        this.loadRoute(...pathSegs) // Guarda nuestra ruta actual
    
    }
}
