import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import App from '../pages/App';

interface RouteItem {
    path : string,
    element : React.ReactNode
}

const PATHS = {
    HOME: '/',
    LOGIN: '/login',
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