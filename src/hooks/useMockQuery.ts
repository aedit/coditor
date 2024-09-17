import { useCallback, useEffect, useState } from 'react';

type Task<T> = {
  status: string;
  data: T;
};

const useFetch = <T>(
  asyncTask: () => Promise<Task<T>>
): [boolean, T, () => void, (newData: any) => void] => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>();

  const refresh = useCallback(() => {
    setIsLoading(true);
    asyncTask()
      .then((response: Task<T>) => {
        if (response.status === 'SUCCESS') {
          setData(response.data);
        }
      })
      .catch(() => {
        console.error('Error occured while loading files');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [asyncTask]);

  useEffect(() => {
    if (data) return;
    refresh();
  }, [refresh, data]);

  return [isLoading, data!, refresh, setData];
};

export default useFetch;
