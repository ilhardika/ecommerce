"use client";

import { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constant/data";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;
