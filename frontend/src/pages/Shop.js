import React from "react";
import ShopProductCard from "../components/ShopProductCard";
import { useSelector } from "react-redux";
import DropdownMenu from "../components/DropdownMenu";
import Pagination from "../components/Pagination";

const Shop = () => {
  const products = useSelector((state) => state.products.allItems);
  return (
    <div className="px-4 sm:px-16 pt-4 pb-12">
      <div className="pt-2 pb-4 flex flex-wrap justify-between">
        <DropdownMenu />
        <Pagination />
      </div>
      <div className="flex flex-wrap gap-4">
        {products.map((item, index) => (
          <ShopProductCard key={item.name + index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
