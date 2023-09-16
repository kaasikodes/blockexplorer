import React from "react";
import ErrorImage from "../../assets/err.png";
import { Button } from "antd";

interface IProps {
  children: React.ReactNode;
  message?: string;
  isError?: boolean;
  onBack?: () => void;
}

export const ErrorWrapper: React.FC<IProps> = ({
  message = "Something went wrong!",
  isError = false,
  children,
  onBack,
}) => {
  return (
    <>
      {isError && (
        <div className="flex items-center flex-col gap-6">
          <div>
            <img src={ErrorImage} alt="error" className="object-contain h-72" />
          </div>
          <h1 className="text-xl ">{message}</h1>
          {onBack && <Button onClick={() => onBack()}>Go back</Button>}
        </div>
      )}
      {!isError && <>{children}</>}
    </>
  );
};
