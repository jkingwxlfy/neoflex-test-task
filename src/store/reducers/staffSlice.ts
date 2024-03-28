import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IHeadset, ICartItem } from '../../models/IHeadset';

interface SliceState {
    cart: ICartItem[];
    totalPrice: number;
    totalCount: number;
}

const initialState: SliceState = {
    cart: [],
    totalPrice: 0,
    totalCount: 0,
};

const cartSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IHeadset>) => {
            if (
                state.cart.find((product) => product.id === action.payload.id)
            ) {
                state.cart = state.cart.map((product) => {
                    if (action.payload.id === product.id) {
                        state.totalPrice += product.price;
                        state.totalCount += 1;
                        return {
                            ...product,
                            totalCount: product.totalCount + 1,
                        };
                    }
                    return product;
                });
            } else {
                state.cart.push({
                    totalCount: 1,
                    ...action.payload,
                });
                state.totalPrice += action.payload.price;
                state.totalCount += 1;
            }
        },
        removeProduct: (state, action: PayloadAction<ICartItem>) => {
            state.totalPrice -=
                action.payload.price * action.payload.totalCount;
            state.totalCount -= action.payload.totalCount;

            state.cart = state.cart.filter(
                (item) => item.id !== action.payload.id
            );
        },
        decreaseProductCount: (state, action: PayloadAction<ICartItem>) => {
            state.cart = state.cart.map((product) => {
                if (
                    product.id === action.payload.id &&
                    product.totalCount > 1
                ) {
                    state.totalPrice -= action.payload.price;
                    state.totalCount -= 1;
                    return { ...product, totalCount: product.totalCount - 1 };
                }
                return product;
            });
        },
    },
});

const { actions, reducer } = cartSlice;
export const { addProduct, removeProduct, decreaseProductCount } = actions;
export default reducer;
