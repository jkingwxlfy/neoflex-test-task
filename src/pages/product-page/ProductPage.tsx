import HeadsetList from '../../components/headset-list/HeadsetList';
import { headsets, wirelessHeadsets } from '../../utils/ProductData';

import './productpage.scss';

const ProductPage: React.FC = () => {
    return (
        <section className="product-page">
            <HeadsetList headsetList={headsets} title="Наушники" />
            <HeadsetList
                headsetList={wirelessHeadsets}
                title="Беспроводные наушники"
            />
        </section>
    );
};
export default ProductPage;
