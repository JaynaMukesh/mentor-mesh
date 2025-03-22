import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./config/routes.ts";
import Landing from "./views/landing.tsx";

const app_routes = createBrowserRouter([
    {
        path: ROUTES.landing,
        element: <Landing />
    }
])

export {app_routes}