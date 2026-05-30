import { useQuery } from "@tanstack/react-query";

async function getMetric(metric: string) {
  const res = await fetch(`/api/metrics/${metric}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch metric "${metric}": ${res.status}`);
  }
  return await res.json();
}

export default function useMetricsClient<T>(metric: string) {
  const { data, isLoading, error } = useQuery<T>({
    queryKey: ["metrics", metric],
    queryFn: () => getMetric(metric),
  });

  return { chartData: data, isLoading, error };
}
