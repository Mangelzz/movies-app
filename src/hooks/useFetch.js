import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResults(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url, options]);
  return { loading, result, error };
}

