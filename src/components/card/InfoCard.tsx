import { Card } from "antd";
import React from "react";

export interface IInfoCardProps {
  title: string;
  items: { name: string; value?: string | number }[];
  bordered?: boolean;
  loading?: boolean;
}
export const InfoCard: React.FC<IInfoCardProps> = ({
  title,
  bordered = false,
  items,
  loading,
}) => {
  return (
    <Card
      loading={loading}
      title={<span className="text-left w-full">{title}</span>}
      bordered={bordered}
    >
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col text-left w-full items-start text-sm"
          >
            <h6 className="font-semibold">{item.name}</h6>
            <p className="text-slate-500">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
