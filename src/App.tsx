import { Skeleton, Tabs } from "antd";
import "./App.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { useGetBlockNumber } from "./hooks/block/useGetBlockNumber";
import BlockWrapper from "./components/blocks/BlockWrapper";
import AccountWrapper from "./components/account/AccountWrapper";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const { isLoading, data: latestBlockNumber } = useGetBlockNumber();

  // TODO: Home Page Should a list of blocks
  // TODO: A block page should be created for the user to see block information & a list of transactions
  // A modal should pop up for the user to be able to see the details of a transaction
  // A view account details page should be present so user can view their account details

  /* 
    Returns the entry component wrapped in an error boundary to handle unexpected errors and show a suitable UI for the end user
    
    @param no params
    @return - React Component
  */

  return (
    <ErrorBoundary message="Ooops! Contact System Administrator">
      <Skeleton
        active
        paragraph={{ rows: 200 }}
        loading={isLoading}
        className="w-full"
      >
        {/* TODO: Refactor to its own comp: BlockNumberControl */}

        <Tabs
          size="large"
          items={[
            {
              label: "Block",
              key: "Block",
              children: <BlockWrapper latestBlockNumber={latestBlockNumber} />,
            },
            {
              label: "Account",
              key: "Account",
              children: <AccountWrapper />,
            },
          ]}
        />
      </Skeleton>
    </ErrorBoundary>
  );
}

export default App;
