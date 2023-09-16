import useSWR from "swr";
import alchemy from "../../lib/alchemy";

export const QUERY_KEY_FOR_BLOCK = "block";

interface IProps {
  blockNumber?: number;
}

const getData = async (props: IProps) => {
  const { blockNumber } = props;
  if (!blockNumber) return;
  return await alchemy.core.getBlock(blockNumber);
};

export const useGetBlock = (props: IProps) => {
  const queryData = useSWR([QUERY_KEY_FOR_BLOCK, props.blockNumber], () =>
    getData(props)
  );

  return queryData;
};
