import { create } from 'zustand';
import { HomeState, HomeStore } from '..';
import axios from 'axios';
import { VendorCategoryProps } from '@/app';

const initialValue: HomeState = {
  categories: [],
  vendorCategories: [],
};

export const useHomeStore = create<HomeStore>((set) => ({
  ...initialValue,
  setCategories: (data) => set({ categories: data }),
  setVendorCategories: async (data, setLoading) => {
    try {
      const response = await axios.get('/api/vendor');
      const vendors: VendorCategoryProps[] = response.data;
      if (response.status === 200) {
        setLoading(false);
      }
      set({ vendorCategories: vendors.filter((vendor) => data.includes(vendor.slug)) });
      // if (data.length > 0) {
      //   // only filter valid slug
      // } else {
      //   // set({ vendorCategories: vendors.filter((vendor) => ['venue', 'wedding-planner', 'fotografi'].includes(vendor.slug)) });
      // }
    } catch (error) {
      console.log(error);
    }
  },
}));
