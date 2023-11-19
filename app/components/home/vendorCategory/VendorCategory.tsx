'use client';

import { HiDotsHorizontal } from 'react-icons/hi';
import Container from '../../Container';
import VendorCategoryItem from './VendorCategoryItem';
import SliderMobileVersion from '../../SliderMobileVersion';
import { useFilterVendorModal } from '@/app/hooks/useFilterVendorModal';
import { VendorCategoryProps } from '@/app';
import { useCallback } from 'react';
import EmptyVendor from './EmptyVendor';

const VendorCategory: React.FC<VendorCategoryProps> = ({ categoryName, vendors, slug }) => {
  const { onOpen, filters, getFilterBySlugCategory } = useFilterVendorModal();

  const showModalFilter = useCallback(() => {
    onOpen(slug, categoryName);
  }, [onOpen, slug, categoryName]);

  const filteredVendors = vendors.filter((vendor) => {
    if (slug in filters) {
      const filterBudget = filters[slug].budget === vendor.vendor.price;
      const filterCountry = filters[slug].country === vendor.vendor.countryCode;
      const filterCity = filters[slug].city === vendor.vendor.city;

      return filterBudget || filterCountry || filterCity;
    }
    return vendors;
  });

  return (
    <div>
      <Container>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold text-[#252525]'>
              {categoryName} di {getFilterBySlugCategory(slug).city}
            </h2>
            <p className='text-xs text-[#555555]'>
              Lihat Rekomendasi dengan <b>{getFilterBySlugCategory(slug).budget}</b> budget
            </p>
          </div>
          <HiDotsHorizontal onClick={showModalFilter} size={25} className='text-neutral-400 cursor-pointer' />
        </div>
      </Container>
      <div className='mt-4'>
        {filteredVendors.length > 0 ? (
          <SliderMobileVersion>
            {filteredVendors.map((item, index) => (
              <VendorCategoryItem key={index} name={item.vendor.name} image={item.vendor.image} slug={item.vendor.slug} />
            ))}
          </SliderMobileVersion>
        ) : (
          <EmptyVendor categoryName={categoryName} city={getFilterBySlugCategory(slug).city} />
        )}
      </div>
    </div>
  );
};

export default VendorCategory;
