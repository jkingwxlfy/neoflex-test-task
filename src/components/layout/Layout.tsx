import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './layout.scss';

const Layout: React.FC = () => {
    return (
        <main className="layout">
            <Header />
            <div className="layout__content">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};
export default Layout;
