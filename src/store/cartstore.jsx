import { create } from 'zustand';

const specificationsList = (set) => ({
    cartData: [],
    addData: (item) => {
        set((state) => ({
            cartData: state.cartData.concat(item)
        }));
    },
    upData: (item) => {
        set((state) => {
            const index = state.cartData.findIndex(post => post.id === item.id);
            if (index !== -1) {
                const newCartData = [...state.cartData];
                newCartData[index] = item;
                return { cartData: newCartData };
            }
            return state;
        });
    },
    removeData: (item) => {
        set((state) => ({
            cartData: state.cartData.filter(post => post.id !== item.id)
        }));
    },
    removeAllData: () => {
        set({ cartData: [] });
    }
});

const useCartData = create(specificationsList);
export default useCartData;