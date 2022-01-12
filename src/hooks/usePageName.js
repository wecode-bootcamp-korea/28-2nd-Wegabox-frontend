import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePageName = () => {
  const [pageName, setPageName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const PATHNAME = location.pathname;
    if (PATHNAME === '/movies') setPageName('list');
    else setPageName('main');
  }, [location]);

  return { pageName, location };
};

export default usePageName;
