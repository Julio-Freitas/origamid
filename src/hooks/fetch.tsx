import { useCallback, useState } from "react";

type TypeOptions = {
  method: string;
  body: any;
};

const useFetch = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url: string, { method, body }: TypeOptions) => {
      let response;
      let json;
      try {
        setError(null);
        setLoading(true);

        response = await fetch(url, {
          method,
          body,
          headers: { "Content-Type": "application/json" },
        });

        json = await response.json();

        if (response.ok === false) throw new Error(json.message);
      } catch (error: any) {
        json = null;
        setLoading(true);
        setError(error?.message as string);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
