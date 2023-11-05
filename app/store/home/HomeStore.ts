import { create } from 'zustand';
import { HomeState, HomeStore } from '..';
import axios from 'axios';
import { VendorCategoryProps } from '@/app';
import { useGlobalStore } from '../GlobalStore';

// const { setLoading } = useGlobalStore();

const initialValue: HomeState = {
  categories: [],
  vendorCategories: [],
  vendorSelected: undefined,
};

export const useHomeStore = create<HomeStore>((set) => ({
  ...initialValue,
  setCategories: (data) => set({ categories: data }),
  setVendorSelected: (data) => set({ vendorSelected: data }),
  // setVendorCategories: (data) => set({ vendorCategories: data }),
  setVendorCategories: async (data, setLoading) => {
    try {
      const response = await axios.get('/api/vendor');
      const vendors: VendorCategoryProps[] = response.data;
      if (response.status === 200) {
        setLoading(false);
      }
      if (data.length > 0) {
        // only filter valid id
        set({ vendorCategories: vendors.filter((vendor) => data.includes(vendor.id)) });
      } else {
        set({ vendorCategories: vendors.filter((vendor) => [1, 2, 3].includes(vendor.id)) });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
