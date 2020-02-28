import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [opts] = useState(options);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    var controller = new AbortController();
    var signal = controller.signal;

    setLoading(true);
    setData(null);
    setError(null);

    (async () => {
      try {
        const response = await fetch(url, {
          ...opts,
          signal
        });
        const decoded = response.json();
        setData(decoded);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [url, opts]);

  return { loading, data, error };
}
