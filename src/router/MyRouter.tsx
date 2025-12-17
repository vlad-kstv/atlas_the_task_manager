import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import App from '../pages/App';
import RegisterPage from '../pages/RegisterPage';

interface RouteItem {
    path : string,
    element : React.ReactNode
}

const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
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
    }
]

export function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route 
                    key={index}
                    path={route.path}
                    element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}