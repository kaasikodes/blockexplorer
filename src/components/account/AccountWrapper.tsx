import { Input } from "antd";
import React, { useState } from "react";
import AccountContainer from "./AccountContainer";
import { shortenText } from "../../lib/utils";

const AccountWrapper: React.FC = () => {
  const [account, setAccount] = useState<string>();

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2 text-left">
          <p>Enter Address</p>
          <Input
            value={account}
            onChange={(val) => setAccount(val.target.value)}
            placeholder="Enter Address"
          />
        </div>
        <div className="flex flex-col gap-2 text-right">
          <p>Account Address</p>
          <span className="font-semibold">
            {shortenText({ text: account ?? "..." })}
          </span>
        </div>
      </div>
      <AccountContainer account={account} />
    </div>
  );
};

export default AccountWrapper;
