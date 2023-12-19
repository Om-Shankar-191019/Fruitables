// ProductDescription.js
import React, { useEffect, useState } from "react";
import ProductDescriptionCard from "../components/ProductDescriptionCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchSingleProduct } from "../axios";
import Loader from "../components/Loader";

const ProductDescription = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    const getProduct = async (productId) => {
      try {
        const response = await fetchSingleProduct(productId);
        setProductDetail(response.data.product);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct(productId);
  }, []);

  return (
    <>
      {!productDetail ? (
        <Loader />
      ) : (
        <div className=" mx-4 sm:mx-16 ">
          <ProductDescriptionCard {...productDetail} />
        </div>
      )}
    </>
  );
};

export default ProductDescription;
