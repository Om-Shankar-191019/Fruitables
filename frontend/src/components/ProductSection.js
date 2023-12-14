import React, { useEffect, useState } from "react";
import { filterCategories } from "../constants";
import CategoryPills from "./CategoryPills";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const products = useSelector((state) => state.products.allItems);
  console.log(products);
  const [filterBy, setFilterBy] = useState("all products");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  const handleFiltrization = (filter_tag) => {
    setFilterBy(filter_tag);
    if (filter_tag === "all products") {
      setFilteredData(products);
    } else {
      const filterCategoryWise = products.filter((item) => {
        return item.category.toLowerCase() === filter_tag.toLowerCase();
      });

      if (filterCategoryWise.length === 0) {
        const subCategoryWise = products.filter((item) => {
          return (
            item["sub-category"].toLowerCase() === filter_tag.toLowerCase()
          );
        });
        setFilteredData(subCategoryWise);
      } else {
        setFilteredData(filterCategoryWise);
      }
    }
  };

  return (
    <section className="mx-4 sm:mx-16 flex flex-col gap-12 ">
      <div className="pb-2">
        <h2 className="text-4xl font-bold text-dark-gray text-center ">
          Our Organic Products
        </h2>
      </div>
      <div className="flex items-center justify-around flex-wrap gap-y-4">
        {filterCategories.map((item, index) => (
          <CategoryPills
            key={item + index}
            category={item}
            handleFiltrization={handleFiltrization}
            isActive={filterBy}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-6 gap-y-12">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ProductCard key={index + item} {...item} />
          ))
        ) : (
          <div className="py-12 ">
            {" "}
            <h2 className="text-2xl text-center ">No item found</h2>{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
