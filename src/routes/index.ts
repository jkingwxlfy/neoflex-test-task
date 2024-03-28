import { CartPage, ProductPage, Page404 } from '../pages';

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    NOT_FOUND = '*',
    PRODUCT_PAGE = '/',
    CART_PAGE = '/cart',
}

export const routes: IRoute[] = [
    { path: RouteNames.NOT_FOUND, component: Page404 },
    { path: RouteNames.PRODUCT_PAGE, component: ProductPage },
    { path: RouteNames.CART_PAGE, component: CartPage },
];
