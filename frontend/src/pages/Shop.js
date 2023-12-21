import React, { useEffect, useState } from "react";
import ShopProductCard from "../components/ShopProductCard";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "../components/DropdownMenu";
import Pagination from "../components/Pagination";
import NoItemFound from "../components/NoItemFound";
import Loader from "../components/Loader";

const Shop = () => {
  const products = useSelector((state) => state.products.allItems);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const [currentAppliedFilter, setCurrentAppliedFilter] =
    useState("all products");

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  const handleFilter = (filter_tag) => {
    setCurrentAppliedFilter(filter_tag);
    if (filter_tag === "all products") {
      setFilteredData(products);
    } else {
      const filterCategoryWise = products.filter(
        (item) => item.category.toLowerCase() === filter_tag.toLowerCase()
      );
      if (filterCategoryWise.length === 0) {
        const subCategoryWise = products.filter(
          (item) =>
            item["sub-category"].toLowerCase() === filter_tag.toLowerCase()
        );
        setFilteredData(subCategoryWise);
      } else {
        setFilteredData(filterCategoryWise);
      }
    }
  };
  return (
    <>
      {!products ? (
        <p> Loading....................................</p>
      ) : (
        <div className="px-4 sm:px-16 pt-4 pb-12">
          <div className="pt-2 pb-4 flex flex-wrap justify-between">
            <DropdownMenu
              handleFilter={handleFilter}
              currentAppliedFilter={currentAppliedFilter}
            />
            {/* <Pagination /> */}
          </div>
          <div className="flex flex-wrap gap-4">
            {filteredData.length > 0 ? (
              filteredData
                .slice()
                .reverse()
                .map((item, index) => (
                  <ShopProductCard key={`shoppage-${index}`} {...item} />
                ))
            ) : (
              <div className="w-full flex justify-center gap-y-5 ">
                <NoItemFound />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
