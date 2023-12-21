import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { categories, subCategories } from "../constants";
import { createProduct, uploadImage } from "../axios";
import { addProductToStore } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (!loginUser) {
      navigate("/login");
    }
  }, []);
  const [data, setData] = useState({
    name: "",
    category: "",
    "sub-category": "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadProductImage = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await uploadImage(formData);
      setData((prev) => {
        return {
          ...prev,
          image: response.data.image.src,
        };
      });
    } catch (error) {
      toast(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProduct(data);
      dispatch(addProductToStore(response.data.product));
      toast("Product uploaded");
      setData(() => {
        return {
          name: "",
          category: "",
          "sub-category": "",
          image: "",
          price: "",
          description: "",
        };
      });
    } catch (error) {
      toast(
        error.response.data.message === undefined
          ? error.message
          : error.response.data.message
      );
    }
  };

  return (
    <div className="p-4 rounded-md">
      <form
        className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1  my-1 rounded-md"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1 rounded-md capitalize"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value="">None</option>
          {categories.map((item, index) => (
            <option key={`selectCategory - ${index}`} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="subCategory">Sub-Category</label>
        <select
          className="bg-slate-200 p-1 my-1 rounded-md capitalize"
          id="subCategory"
          name="sub-category"
          onChange={handleOnChange}
          value={data["sub-category"]}
        >
          <option value="">None</option>
          {subCategories.map((item, index) => (
            <option key={`selectCategory - ${index}`} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200  flex items-center justify-center cursor-pointer rounded-md">
            {data.image ? (
              <img src={data.image} className="h-full rounded-md" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadProductImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type="number"
          className="bg-slate-200 p-1 my-1 rounded-md"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          value={data.description}
          className="bg-slate-200 p-1 my-1 resize-none h-28 rounded-md"
          name="description"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-theme-green hover:bg-theme-yellow text-white hover:text-dark-gray transition-all text-lg font-medium my-2 drop-shadow rounded-md">
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
