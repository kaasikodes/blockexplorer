import { TransactionReceipt } from "alchemy-sdk";
import { type ColumnsType } from "antd/es/table";
import { shortenText } from "../lib/utils";

export const transCols: ColumnsType<TransactionReceipt> = [
  {
    dataIndex: "Tx Hash",
    title: "Tx Hash",
    render: (_, item) => shortenText({ text: item.transactionHash }),
  },
  {
    dataIndex: "Block Hash",
    title: "Block Hash",
    render: (_, item) => shortenText({ text: item.blockHash }),
  },
  {
    dataIndex: "From",
    title: "From",
    render: (_, item) => shortenText({ text: item.from }),
  },
  {
    dataIndex: "To",
    title: "To",
    render: (_, item) => shortenText({ text: item.to }),
  },
  {
    dataIndex: "Status",
    title: "Status",
    render: (_, item) => item.status,
  },
];
