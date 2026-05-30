import { useEffect, useState } from "react";

async function getMetric(metric: string) {
  const res = await fetch(`/api/metrics/${metric}`);
  return await res.json();
}

export default function useMetricsClient<T>(metric: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMetric(metric)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [metric]);

  return { chartData: data, isLoading, error };
}
