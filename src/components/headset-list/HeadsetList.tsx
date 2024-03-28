import type { IHeadset } from '../../models/IHeadset';
import HeadsetItem from '../headset-item/HeadsetItem';

import './headsetlist.scss';

interface IHeadsetListProps {
    headsetList: IHeadset[];
    title: string;
}

const HeadsetList: React.FC<IHeadsetListProps> = ({ headsetList, title }) => {
    return (
        <div className="headset-list">
            <div className="headset-list__title">{title}</div>
            <div className="headset-list__wrapper">
                {headsetList.map((item) => (
                    <HeadsetItem key={Math.random()} data={item} />
                ))}
            </div>
        </div>
    );
};
export default HeadsetList;
