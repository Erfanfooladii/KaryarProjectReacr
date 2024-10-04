import { create } from 'zustand';

const specificationsList = (set) => ({
    data: [],
    addData: (item) => {
        set((state) => ({
            data: [...state.data, item]
        }));
    },
    upData: (item) => {
        set((state) => ({
            data: state.data.map(post => post.id === item.id ? item : post)
        }));
    },
    removeData:(item)=>{
        set((state)=>({
            data:state.data.filter(post => post.id !== item.id)
        }))
    }
});

const useDatas = create(specificationsList);
export default useDatas;