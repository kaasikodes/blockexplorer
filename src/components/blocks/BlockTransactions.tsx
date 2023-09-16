import { useGetBlockTransactionReceipts } from "../../hooks/block/transaction/useGetBlockTransactionReceipts";
import { Table } from "antd";
import { ErrorWrapper } from "../error/ErrorWrapper";
import { TransactionReceipt } from "alchemy-sdk";
import { nullToUndefined } from "../../lib/utils";
import constants from "../../constants";

export const BlockTransactions: React.FC<{
  blockHash?: string;
}> = ({ blockHash }) => {
  const {
    data: transactions,
    error,
    isLoading,
  } = useGetBlockTransactionReceipts({ blockHash });
  if (!blockHash) return null;

  return (
    <ErrorWrapper isError={error}>
      <Table
        columns={constants.COLUMNS.transactions}
        loading={isLoading}
        dataSource={nullToUndefined<TransactionReceipt[]>(
          transactions?.receipts
        )?.map((item) => ({ ...item, key: item.transactionHash }))}
      />
    </ErrorWrapper>
  );
};
