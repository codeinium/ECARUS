import { RouteObject } from "react-router-dom";
import { MainLayout } from "../../pages/layouts/MainLayout/MainLayout.tsx";
import { MainPage } from "../../pages/main";
import { LoginPage, RegisterPage, PasswordResetRequestPage, PasswordResetPage } from '../../pages/auth';
import { createBrowserRouter } from "react-router";
import { ProfilePage } from '../../pages/profile';
import { CollectionPointsPage } from '../../pages/collection-points';
import { EcoMarketPage } from '../../pages/eco-market';

const routerConfig: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
          { index: true, element: <MainPage /> },
          { path: 'login', element: <LoginPage /> },
          { path: 'register', element: <RegisterPage /> },
          { path: 'forgot', element: <PasswordResetRequestPage /> },
          { path: 'reset', element: <PasswordResetPage /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'collection-points', element: <CollectionPointsPage /> },
          { path: 'eco-market', element: <EcoMarketPage /> }
        ]
    }
]

export const router = createBrowserRouter(routerConfig);
