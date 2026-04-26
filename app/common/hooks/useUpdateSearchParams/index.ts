import { useSearchParams } from "react-router";

function useUpdateSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (params: {
    [key: string]: string | null | undefined;
  }) => {
    const nextParams = {
      ...Object.fromEntries(searchParams),
      ...params,
    };

    Object.keys(nextParams).forEach((key) => {
      if (
        nextParams[key] === "" ||
        nextParams[key] === null ||
        nextParams[key] === undefined
      ) {
        delete nextParams[key];
      }
    });

    setSearchParams(nextParams as Record<string, string>);
  };

  const params = Object.fromEntries(searchParams);
  Object.keys(params).forEach((key) => {
    if (params[key] === "") {
      delete params[key];
    }
  });

  return {
    searchParams: params,
    updateSearchParams,
  };
}

export default useUpdateSearchParams;
