import "./App.css";
import BlockContainer from "./components/blocks/BlockContainer";
import { useGetBlockNumber } from "./hooks/block/useGetBlockNumber";
import { BeatLoader } from "react-spinners";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const { isLoading, data: blockNumber } = useGetBlockNumber();

  // TODO: Home Page Should a list of blocks
  // TODO: A block page should be created for the user to see block information & a list of transactions
  // A modal should pop up for the user to be able to see the details of a transaction
  // A view account details page should be present so user can view their account details

  return (
    <div className="">
      <div className="text-left bg-green-400">
        Block Number: {isLoading ? <BeatLoader /> : <span>{blockNumber}</span>}
      </div>

      <BlockContainer />
    </div>
  );
}

export default App;
