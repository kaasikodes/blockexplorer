import { Block } from "alchemy-sdk";
import React from "react";
import { InfoCardList } from "../card/InfoCardList";
import { shortenText, hexToString } from "../../lib/utils";

export const BlockDetails: React.FC<{ block?: Block }> = ({ block }) => {
  if (!block) return null;
  return (
    <InfoCardList
      data={[
        {
          title: "Block Hash",
          items: [
            {
              name: "Hash",
              value: shortenText({ text: block?.hash }),
            },
            {
              name: "Parent Hash",
              value: shortenText({ text: block?.parentHash }),
            },
          ],
        },
        {
          title: "Transactions",
          items: [
            {
              name: "Transaction Count",
              value: block?.transactions.length,
            },
            {
              name: "First Tx Hash",
              value: shortenText({ text: block?.transactions[0] }),
            },
            {
              name: "last Tx Hash",
              value: shortenText({
                text: block?.transactions[block?.transactions.length - 1],
              }),
            },
          ],
        },
        {
          title: "Block Data",
          items: [
            {
              name: "Timestamp",
              value: block?.timestamp,
            },
            {
              name: "Number",
              value: block?.number,
            },
            {
              name: "Nonce",
              value: block?.nonce,
            },
            {
              name: "Miner Address",
              value: shortenText({ text: block?.miner }),
            },
          ],
        },
        {
          title: "Gas",
          items: [
            {
              name: "Base Fee Per Gas",
              value: hexToString(block?.baseFeePerGas?._hex),
            },
            {
              name: "Gas Limit",
              value: hexToString(block?.gasLimit._hex),
            },
            {
              name: "Gas Used",
              value: hexToString(block?.gasUsed._hex),
            },
          ],
        },
      ]}
    />
  );
};
