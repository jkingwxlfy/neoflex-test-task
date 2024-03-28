export interface IHeadset {
    id: number;
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    rate: number;
}

export interface ICartItem extends IHeadset {
    totalCount: number;
}
