import { Alchemy, Network } from "alchemy-sdk";
import constants from "../../constants";

const settings = {
  apiKey: constants.ENV.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);
export default alchemy;
