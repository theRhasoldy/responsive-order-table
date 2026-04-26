import { useSearchParams } from "react-router";

function useUpdateSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (params: { [key: string]: string }) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...params,
    });
  };

  const params = Object.fromEntries(searchParams);
  Object.keys(params).forEach((key) => {
    if (params[key] === "") {
      delete params[key];
    }
  });

  console.log(params);

  return {
    searchParams: params,
    updateSearchParams,
  };
}

export default useUpdateSearchParams;
