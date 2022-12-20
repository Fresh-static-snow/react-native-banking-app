import { API } from '../API';
import { alertErrorHandler } from '../utils/alert';
import { useState, useEffect } from 'react';

export interface ICurrencies {
  value: string | number;
  name: 'USD' | 'CAD' | 'EUR';
}

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<ICurrencies[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API + '&base_currency=USD');
        const result = await response.json();

        setCurrencies([
          {
            name: 'CAD',
            value: (1 / result.data.CAD).toFixed(2),
          },

          {
            name: 'USD',
            value: (1 / result.data.USD).toFixed(2),
          },
          {
            name: 'EUR',
            value: (1 / result.data.EUR).toFixed(2),
          },
        ]);
      } catch (e) {
        alertErrorHandler({ message: 'Error', e });
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { loading, currencies };
};
