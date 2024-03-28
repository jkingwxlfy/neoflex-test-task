import { Routes, Route } from 'react-router-dom';
import { routes } from '../../routes';
import Layout from '../layout/Layout';

import './app.scss';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>
        </Routes>
    );
};
export default App;
