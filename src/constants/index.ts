import { transCols } from "./data-columns";

const ENV = {
  ALCHEMY_API_KEY: import.meta.env.VITE_ALCHEMY_API_KEY,
};

const COLUMNS = {
  transactions: transCols,
};

const constants = {
  ENV,
  COLUMNS,
};

export default constants;
