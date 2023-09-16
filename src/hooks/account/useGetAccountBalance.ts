import useSWR from "swr";
import alchemy from "../../lib/alchemy";

export const QUERY_KEY_FOR_ACCOUNT_BALANCE = "account-balance";

interface IProps {
  addressOrName?: string;
  blockTag?: string;
}

const getData = async (props: IProps) => {
  const { addressOrName, blockTag } = props;
  if (!addressOrName) return;
  return await alchemy.core.getBalance(addressOrName, blockTag);
};

export const useGetAccountBalance = (props: IProps) => {
  const queryData = useSWR(
    [QUERY_KEY_FOR_ACCOUNT_BALANCE, props.addressOrName],
    () => getData(props)
  );

  return queryData;
};
