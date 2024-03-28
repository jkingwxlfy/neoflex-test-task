import { Link } from 'react-router-dom';
import { RouteNames } from '../../routes';

import './page404.scss';

const Page404: React.FC = () => {
    return (
        <section className="page404">
            <h1>Страница не найдена</h1>
            <Link to={RouteNames.PRODUCT_PAGE}>Вернуться на главную</Link>
        </section>
    );
};
export default Page404;
