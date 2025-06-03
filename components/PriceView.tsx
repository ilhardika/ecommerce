import React from "react";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount?: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div>
      <div>
        <PriceFormatter amount={price} />
        {price && discount && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className="line-through font-normal text-gray-500 ml-2"
          />
        )}
      </div>
    </div>
  );
};

export default PriceView;
