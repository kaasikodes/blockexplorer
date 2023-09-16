import { useGetBlock } from "../../hooks/block/useGetBlock";
import { Skeleton } from "antd";
import { ErrorWrapper } from "../error/ErrorWrapper";
import { BlockDetails } from "./BlockDetails";
import { BlockTransactions } from "./BlockTransactions";

interface IProps {
  blockNumber?: number;
}
const BlockContainer: React.FC<IProps> = ({ blockNumber }) => {
  const { data: block, error, isLoading } = useGetBlock({ blockNumber });

  return (
    <div>
      <Skeleton
        active
        loading={isLoading}
        paragraph={{ rows: 20 }}
        className="w-[700px]"
      >
        <ErrorWrapper isError={error}>
          <div className="flex flex-col gap-4">
            <BlockDetails block={block} />
            <BlockTransactions blockHash={block?.hash} />
          </div>
        </ErrorWrapper>
      </Skeleton>
    </div>
  );
};

export default BlockContainer;
