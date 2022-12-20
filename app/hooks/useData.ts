import { DataContext } from '../providers';
import { useContext } from 'react';

export const useData = () => useContext(DataContext);
