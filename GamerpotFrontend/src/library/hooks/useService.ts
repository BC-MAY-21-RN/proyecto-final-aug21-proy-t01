import {useState} from 'react';

export const useService = (service: (param: any) => any) => {
  const [isLoading, setIsLoading] = useState(false);

  const callService = async (params: any) => {
    setIsLoading(true);
    const data = await service(params);
    setIsLoading(false);
    return data;
  };

  return [isLoading, callService] as const;
};
