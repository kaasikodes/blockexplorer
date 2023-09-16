import useSWR from "swr";
import alchemy from "../../../lib/alchemy";

export const QUERY_KEY_FOR_ACCOUNT_TRANSACTION_COUNT =
  "block-transaction-count";

interface IProps {
  addressOrName?: string;
  blockTag?: string;
}

const getData = async (props: IProps) => {
  const { addressOrName, blockTag } = props;
  if (!addressOrName) return;
  return await alchemy.core.getTransactionCount(addressOrName, blockTag);
};

export const useGetAccountTransactionCount = (props: IProps) => {
  const queryData = useSWR(
    [QUERY_KEY_FOR_ACCOUNT_TRANSACTION_COUNT, props.addressOrName],
    () => getData(props)
  );

  return queryData;
};
