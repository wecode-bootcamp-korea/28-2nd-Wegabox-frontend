import { useState } from 'react';

const useFetch = url => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const fetchData = () => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setLoading(true);
        setResult(result);
      })
      .catch(e => {
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return [loading, result, fetchData];
};

export default useFetch;
