import type { IHeadset } from '../models/IHeadset';

import AppleBYZ from '../../public/applebyz.png';
import AppleEarPods from '../../public/appleearpods.png';
import AppleEarPodsV2 from '../../public/appleearpodsv2.png';
import AppleAirPods from '../../public/appleairpods.png';
import Gerlax from '../../public/gerlax.png';
import Borofone from '../../public/borofone.png';

export const headsets: IHeadset[] = [
    {
        id: 1,
        image: AppleBYZ,
        title: 'Apple BYZ S8521',
        price: 2927,
        oldPrice: 3527,
        rate: 4.7,
    },
    {
        id: 2,
        image: AppleEarPods,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 3,
        image: AppleEarPodsV2,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 4,
        image: AppleBYZ,
        title: 'Apple BYZ S8521',
        price: 2927,
        rate: 4.7,
    },
    {
        id: 5,
        image: AppleEarPods,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 6,
        image: AppleEarPodsV2,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
];

export const wirelessHeadsets: IHeadset[] = [
    {
        id: 7,
        image: AppleAirPods,
        title: 'Apple AirPods',
        price: 9527,
        rate: 4.7,
    },
    { id: 8, image: Gerlax, title: 'GERLAX GH-04', price: 6527, rate: 4.7 },
    { id: 9, image: Borofone, title: 'BOROFONE BO4', price: 7527, rate: 4.7 },
];
