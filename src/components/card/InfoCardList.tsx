import React from "react";
import { IInfoCardProps, InfoCard } from "./InfoCard";

interface IProps {
  data: IInfoCardProps[];
}

export const InfoCardList: React.FC<IProps> = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4">
      {data.map((item, i) => (
        <InfoCard {...item} key={i} />
      ))}
    </div>
  );
};
