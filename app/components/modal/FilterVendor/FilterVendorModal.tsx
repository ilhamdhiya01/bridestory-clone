'use client';

import { AiOutlineClose } from 'react-icons/ai';
import Modal from '../Modal';
import { useFilterVendorModal } from '@/app/hooks/useFilterVendorModal';
import { useGlobalStore } from '@/app/store/GlobalStore';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Container from '../../Container';
import Button from '../../Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../Loading';
import { BsSearch } from 'react-icons/bs';
import CityItem from './CityItem';
import CountryItem from './CountryItem';

enum STEPS {
  SELECT_FILTER = 0,
  BUDGET = 1,
  COUNTRY = 2,
  CITY = 3,
}

const FilterVendorModal = () => {
  const [step, setStep] = useState(STEPS.SELECT_FILTER);
  const [countryCode, setCountryCode] = useState('ID');
  const { isLoading, setLoading } = useGlobalStore();
  const { isOpen, onClose, filters, setFilter, countries, cities, setCountries, setCites, setBudgets, budgets, citySelected, setCitySelected } = useFilterVendorModal();

  const handleSetBudget = (budget: string) => {
    setFilter({ ...filters, budget: budget });
    onBackSelectFilter();
  };

  const onSelectBudget = () => {
    setStep(STEPS.BUDGET);
  };

  const onBackSelectFilter = () => {
    setStep(STEPS.SELECT_FILTER);
    setCitySelected(false);
  };

  const onSelectCountry = () => {
    setStep(STEPS.COUNTRY);
  };

  const handleSetCountryCode = (countryCode: string, countryName: string) => {
    setCountryCode(countryCode);
    setStep(STEPS.CITY);
    setFilter({ ...filters, country: countryName });
  };

  const handleSelectCity = (cityName: string, index: number) => {
    const selectedCities = [...cities];
    selectedCities[index].selected = !selectedCities[index].selected;
    setCites(selectedCities);
    setFilter({ ...filters, city: cityName });
    if (selectedCities[index].selected) {
      setCitySelected(true);
      selectedCities.forEach((city, i) => {
        if (i !== index) {
          city.selected = false;
        }
      });
    } else {
      setCitySelected(false);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
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
    };

    const fetchCities = async () => {
      const response = await axios.get(`http://api.geonames.org/searchJSON?country=${countryCode}&username=ilhamdhiya01`);
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
    };

    const fetchBudget = async () => {
      const response = await axios.get('/static/data.json');
      setBudgets(response.data.budgets);
    };

    setLoading(true);

    if (step === STEPS.BUDGET) {
      fetchBudget();
    }
    if (step === STEPS.COUNTRY) {
      fetchCountries();
    }
    if (step === STEPS.CITY) {
      fetchCities();
    }
  }, [step, countryCode, setCites, setCountries, setBudgets, setLoading]);

  let bodyContent = (
    <div className='h-full'>
      <div className='flex justify-center items-center border-b py-4 relative'>
        <AiOutlineClose onClick={onClose} size={20} className='absolute left-2 text-[#848484]' />
        <h3 className='font-semibold'>Venue</h3>
      </div>
      <div>
        <Container>
          <div className='flex items-center justify-between py-4 border-b'>
            <h2 className='font-semibold text-[#252525]'>
              Ubah budget untuk <span>Venue</span>
            </h2>
            <div className='flex items-center' onClick={onSelectBudget}>
              <span className='text-[#aaaaaa] font-semibold'>{filters.budget}</span>
              <FaChevronRight className='text-[#aaaaaa]' />
            </div>
          </div>
          <div className='flex items-center justify-between py-4 border-b'>
            <h2 className='font-semibold text-[#252525]'>
              Ubah lokasi <span>Venue</span>
            </h2>
            <div className='flex items-center' onClick={onSelectCountry}>
              <span className='text-[#aaaaaa] font-semibold'>{filters.city === 'Semua Kota' || filters.city === '' ? filters.country : filters.city}</span>
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
          <ul>
            {budgets.map((budget, index) => (
              <li key={index} onClick={() => handleSetBudget(budget.price)} className='border-b py-4 px-4'>
                <span className='text-sm text-[#252525]'>{budget.price}</span>
              </li>
            ))}
          </ul>
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
                <CountryItem key={index} countryName={country.countryName} onSelected={() => handleSetCountryCode(country.countryCode, country.countryName)} />
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
            <input type='text' className='border-none outline-none w-full py-2 text-sm placeholder:text-sm' placeholder='Search' />
          </div>
        </div>
        <div className='h-1/2'>
          {isLoading ? (
            <Loading />
          ) : (
            <div className='mt-[90px] divide-y'>
              {/* <li className='flex justify-between items-center py-3 px-4'>
                <span className='text-sm text-[#252525]'>Semua Kota</span>
              </li> */}
              {cities.map((city, index) => (
                <CityItem key={index} cityName={city.cityName} selected={city.selected} onSelected={() => handleSelectCity(city.cityName, index)} />
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
