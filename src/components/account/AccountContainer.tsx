import { ErrorWrapper } from "../error/ErrorWrapper";

import { useGetAccountBalance } from "../../hooks/account/useGetAccountBalance";
import { InfoCard } from "../card/InfoCard";
import { hexToString } from "../../lib/utils";
import { useGetAccountTransactionCount } from "../../hooks/account/transaction/useGetAccountTransactionCount";

interface IProps {
  account?: string;
}
const AccountContainer: React.FC<IProps> = ({ account }) => {
  const {
    data: accountBal,
    error: errAccBal,
    isLoading: isLoadAccBal,
  } = useGetAccountBalance({ addressOrName: account });
  const {
    data: transCount,
    error: errTransCount,
    isLoading: isLoadTransCount,
  } = useGetAccountTransactionCount({ addressOrName: account });

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <ErrorWrapper isError={errAccBal}>
          <InfoCard
            {...{
              title: "Account Balance",
              key: "1",
              loading: isLoadAccBal,
              items: [
                { name: "Balance", value: hexToString(accountBal?._hex) },
              ],
            }}
          />
        </ErrorWrapper>
        <ErrorWrapper isError={errTransCount}>
          <InfoCard
            {...{
              title: "Account Transaction Count",
              key: "2",
              loading: isLoadTransCount,
              items: [{ name: "Count", value: transCount }],
            }}
          />
        </ErrorWrapper>
      </div>
    </div>
  );
};

export default AccountContainer;
