'use client';

import { AiOutlineClose } from 'react-icons/ai';
import Modal from '../Modal';
import { DEFAULT_FILTER, useFilterVendorModal, Filter } from '@/app/hooks/useFilterVendorModal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Container from '../../Container';
import Button from '../../Button';
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Loading from '../../Loading';
import { BsSearch } from 'react-icons/bs';
import CityItem from './CityItem';
import CountryItem from './CountryItem';
import BudgetItem from './BudgetItem';

enum STEPS {
  SELECT_FILTER = 0,
  BUDGET = 1,
  COUNTRY = 2,
  CITY = 3,
}

const FilterVendorModal = () => {
  const [step, setStep] = useState(STEPS.SELECT_FILTER);
  const [isLoading, setLoading] = useState(false);
  const [citySelected, setCitySelected] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<Filter>({
    budget: '',
    country: '',
    city: '',
  });
  const [searchCity, setSearchCity] = useState('');
  const { isOpen, onClose, filters, countries, cities, setCountries, setCites, setBudgets, budgets, getFilterBySlugCategory, filterModalData, setFilters } = useFilterVendorModal();

  const filter = useMemo(() => {
    if (isOpen || filters) {
      return getFilterBySlugCategory(filterModalData.slugCategory);
    }
    return DEFAULT_FILTER;
  }, [filterModalData.slugCategory, getFilterBySlugCategory, isOpen, filters]);

  const onSelectBudget = () => {
    setStep(STEPS.BUDGET);
  };

  const onBackSelectFilter = () => {
    setStep(STEPS.SELECT_FILTER);
  };

  const onSelectCountry = () => {
    setStep(STEPS.COUNTRY);
  };

  const handleSetCountryCode = (countryCode: string) => {
    setFilters(filterModalData.slugCategory, { ...filter, country: countryCode });
    // setCurrentFilter({...currentFilter, country: countryCode});
    setStep(STEPS.CITY);
    setCitySelected(false);
    setSearchCity('');
  };

  const handleSelectCity = (cityName: string) => {
    setFilters(filterModalData.slugCategory, { ...filter, city: cityName });
    // setCurrentFilter({...currentFilter, city: cityName});
    setCitySelected(cityName !== null ? true : false);
  };

  const handleSetBudget = (budget: string) => {
    setFilters(filterModalData.slugCategory, { ...filter, budget: budget });
    // setCurrentFilter({...currentFilter, budget: budget});
    onBackSelectFilter();
  };

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      if (response.status === 200) {
        setLoading(false);
      }
      const transformedCountries = response.data.map((country: any) => ({
        countryName: country.name.common,
        countryCode: country.cca2,
        flag: country.flags.svg,
      }));
      // sort country by asc
      transformedCountries.sort((a: any, b: any) => a.countryName.localeCompare(b.countryName));
      setCountries(transformedCountries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [setCountries, setLoading]);

  const fetchCities = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://api.geonames.org/searchJSON?country=${filter.country}&username=ilhamdhiya01`);
      if (response.status === 200) {
        setLoading(false);
      }
      const transformedCities = response.data.geonames.map((city: any) => ({
        cityName: city.name,
        adminName1: city.adminName1,
      }));
      // sort city by asc
      transformedCities.sort((a: any, b: any) => a.cityName.localeCompare(b.cityName));

      setCites(transformedCities);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [filter.country, setCites, setLoading]);

  const fetchBudget = useCallback(async () => {
    try {
      const response = await axios.get('/static/data.json');
      setBudgets(response.data.budgets);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [setBudgets]);

  useEffect(() => {
    if (step === STEPS.BUDGET) {
      fetchBudget();
    }
    if (step === STEPS.COUNTRY) {
      fetchCountries();
    }
    if (step === STEPS.CITY) {
      fetchCities();
    }
  }, [step, budgets, filters.budget, setCites, setCountries, setBudgets, setLoading, fetchBudget, fetchCountries, fetchCities]);

  let bodyContent = (
    <div className='h-full'>
      <div className='flex justify-center items-center border-b py-4 relative'>
        <AiOutlineClose onClick={onClose} size={20} className='absolute left-2 text-[#848484]' />
        <h3 className='font-semibold'>{filterModalData.categoryName}</h3>
      </div>
      <div>
        <Container>
          <div className='flex items-center justify-between py-4 border-b'>
            <h2 className='font-semibold text-[#252525]'>
              Ubah budget untuk <span>{filterModalData.categoryName}</span>
            </h2>
            <div className='flex items-center' onClick={onSelectBudget}>
              <span className='text-[#aaaaaa] font-semibold'>{filter.budget}</span>
              <FaChevronRight className='text-[#aaaaaa]' />
            </div>
          </div>
          <div className='flex items-center justify-between py-4 border-b'>
            <h2 className='font-semibold text-[#252525]'>
              Ubah lokasi <span>{filterModalData.categoryName}</span>
            </h2>
            <div className='flex items-center' onClick={onSelectCountry}>
              <span className='text-[#aaaaaa] font-semibold'>{filter.city}</span>
              <FaChevronRight className='text-[#aaaaaa]' />
            </div>
          </div>
          <div className='mt-16'>
            <Button label='Selesai' />
          </div>
        </Container>
      </div>
    </div>
  );

  if (step === STEPS.BUDGET) {
    bodyContent = (
      <div className='h-full'>
        <div className='flex justify-center items-center py-2 relative'>
          <FaChevronLeft size={20} onClick={onBackSelectFilter} className='absolute left-2 text-[#848484]' />
          <h3 className='text-xl text-[#444444] font-bold'>Budget</h3>
        </div>
        <div>
          <div className='divide-y'>
            {budgets.map((budget, index) => (
              <BudgetItem key={index} budget={budget.price} onSelected={() => handleSetBudget(budget.price)} selected={budget.price === filter.budget} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === STEPS.COUNTRY) {
    bodyContent = (
      <div className='h-full relative'>
        <div className='fixed w-full top-0 bg-white rounded-t-lg'>
          <div className='flex justify-center items-center py-3 relative'>
            <FaChevronLeft size={20} onClick={onBackSelectFilter} className='absolute left-2 text-[#848484]' />
            <h3 className='text-xl text-[#444444] font-bold'>Location</h3>
          </div>
        </div>
        <div className='h-1/2'>
          {isLoading ? (
            <Loading />
          ) : (
            <div className='mt-14 divide-y border h-full'>
              {countries.map((country, index) => (
                <CountryItem key={index} countryName={country.countryName} onSelected={() => handleSetCountryCode(country.countryCode)} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (step === STEPS.CITY) {
    bodyContent = (
      <div className='h-full relative'>
        <div className='fixed w-full top-0 bg-white rounded-t-lg px-4'>
          <div className='flex justify-between items-center py-3 relative'>
            <FaChevronLeft size={18} onClick={onSelectCountry} className='text-[#848484]' />
            <h3 className='text-xl text-[#444444] font-bold'>City</h3>
            <span onClick={onBackSelectFilter} className={`cursor-pointer font-semibold transition duration-150  text-lg ${citySelected ? 'text-[#eba1a1]' : 'text-[#AAAAAA]'}`}>
              Apply
            </span>
          </div>
          <div className='flex flex-row items-center bg-white gap-2 drop-shadow-md rounded-md overflow-hidden px-3'>
            <BsSearch className='shrink-0' size={15} />
            <input type='text' value={searchCity} onChange={(e) => setSearchCity(e.target.value)} className='border-none outline-none w-full py-2 text-sm placeholder:text-sm' placeholder='Search' />
          </div>
        </div>
        <div className='h-1/2'>
          {isLoading ? (
            <Loading />
          ) : (
            <div className='mt-[90px] divide-y'>
              {cities
                .filter((city) => city.cityName.toLowerCase().includes(searchCity.toLowerCase()))
                .map((city, index) => (
                  <CityItem key={index} cityName={city.cityName} selected={city.cityName === filter.city} onSelected={() => handleSelectCity(city.cityName)} />
                ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return <Modal isOpen={isOpen} body={bodyContent} filter />;
};

export default FilterVendorModal;
