import { create } from "zustand";

interface OrderDetail {
  [key: string]: any;
}

interface OrderStore {
  orderDetail: OrderDetail;
  addOrderDetail: (detail: OrderDetail) => void;
  clearOrderDetail: () => void;
}

const useOrderStore = create<OrderStore>((set) => ({
  orderDetail: {},
  addOrderDetail: (detail) =>
    set((state) => ({
      orderDetail: {
        ...state.orderDetail,
        ...detail,
      },
    })),
  clearOrderDetail: () =>
    set(() => ({
      orderDetail: {},
    })),
}));

export default useOrderStore;
