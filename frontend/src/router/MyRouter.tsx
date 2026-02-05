import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import App from '../pages/App';
import RegisterPage from '../pages/RegisterPage';
import CreateProjectPage from '../pages/CreateProjectPage';
import Layout from '@/layout';

interface RouteItem {
    path : string,
    element : React.ReactNode
}

const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
    CREATE_PROJECT_PAGE: 'create-project', 
}

const routes : RouteItem[] = [
    {
        path: PATHS.HOME,
        element: <App />
    },
    {
        path: PATHS.LOGIN,
        element: <LoginPage />
    },
    {
        path: PATHS.DASHBOARD,
        element: <DashboardPage/>
    },
    {
        path: PATHS.REGISTER,
        element: <RegisterPage/>
    },
    {
        path: PATHS.CREATE_PROJECT_PAGE,
        element: <CreateProjectPage/>
    }
]

export function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {routes.map((route, index) => (
                        <Route 
                        key={index}
                        path={route.path}
                        element={route.element}
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}