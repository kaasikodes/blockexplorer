import useSWR from "swr";
import alchemy from "../../../lib/alchemy";

export const QUERY_KEY_FOR_BLOCK_TRANSACTION_RECEIPTS =
  "block-transaction-receipts";

interface IProps {
  blockHash?: string;
}

const getData = async (props: IProps) => {
  const { blockHash } = props;
  if (!blockHash) return;
  return await alchemy.core.getTransactionReceipts({ blockHash });
};

export const useGetBlockTransactionReceipts = (props: IProps) => {
  const queryData = useSWR(
    [QUERY_KEY_FOR_BLOCK_TRANSACTION_RECEIPTS, props.blockHash],
    () => getData(props)
  );

  return queryData;
};
