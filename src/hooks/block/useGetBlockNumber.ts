import useSWR from "swr";
import alchemy from "../../lib/alchemy";

export const QUERY_KEY_FOR_BLOCK_NUMBER = "block-number";

const getData = async (): Promise<number> => {
  return await alchemy.core.getBlockNumber();
};

export const useGetBlockNumber = () => {
  const queryData = useSWR([QUERY_KEY_FOR_BLOCK_NUMBER], () => getData());

  return queryData;
};
