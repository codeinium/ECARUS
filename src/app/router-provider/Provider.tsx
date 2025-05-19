import { RouterProvider as RouterProviderDom } from 'react-router-dom';
import { router } from "../Router/AppRouter.tsx";

export const RouterProvider = () => (
    <RouterProviderDom router={ router }/>
)
