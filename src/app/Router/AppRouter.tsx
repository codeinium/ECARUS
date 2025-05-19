import { RouteObject } from "react-router-dom";
import { MainLayout } from "../../pages/layouts/MainLayout/MainLayout.tsx";
import { createBrowserRouter } from "react-router";

const routerConfig: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>
        // TODO: children: настроить маршруты
    }
]

export const router = createBrowserRouter(routerConfig);
