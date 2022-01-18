import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePageName = () => {
  const [pageName, setPageName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const PATHNAME = location.pathname;
    if (PATHNAME === '/movies') setPageName('list');
    else if (PATHNAME === '/') setPageName('main');
    else setPageName('etc');
  }, [location]);

  return { pageName, location };
};

export default usePageName;
