import { InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import BlockContainer from "./BlockContainer";

const BlockWrapper: React.FC<{ latestBlockNumber?: number }> = ({
  latestBlockNumber,
}) => {
  const [blockNumber, setBlockNumber] = useState<number>();

  useEffect(() => {
    if (!latestBlockNumber) return;
    setBlockNumber(latestBlockNumber);
  }, []);
  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2 text-right">
          <p>Enter Block Number</p>
          <InputNumber
            defaultValue={latestBlockNumber}
            value={blockNumber}
            onChange={(val) => typeof val === "number" && setBlockNumber(val)}
            placeholder="Enter block number"
          />
        </div>
        <div className="flex flex-col gap-2 text-right">
          <p>Latest Block Number</p>
          <span className="font-semibold">{latestBlockNumber}</span>
        </div>
      </div>
      <BlockContainer blockNumber={blockNumber} />
    </div>
  );
};

export default BlockWrapper;
