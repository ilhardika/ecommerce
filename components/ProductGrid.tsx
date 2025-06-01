"use client";

import { useState } from "react";
import HomeTabBar from "./HomeTabBar";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div>
      <HomeTabBar />
    </div>
  );
};

export default ProductGrid;
