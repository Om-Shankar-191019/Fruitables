import { IoMdCall } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoMdReturnLeft } from "react-icons/io";

export const allFeatures = [
  {
    Icon: MdDeliveryDining,
    feature: "Free Shipping",
    description: "Free on order over ₹ 500 ",
  },
  {
    Icon: RiSecurePaymentFill,
    feature: "Security Payment",
    description: "100% security payment",
  },
  {
    Icon: IoMdReturnLeft,
    feature: "7 Day Return",
    description: "7 day money guarantee",
  },
  {
    Icon: IoMdCall,
    feature: "24/7 Support",
    description: "Support every time fast",
  },
];

export const filterCategories = [
  "all products",
  "fruit",
  "vegetable",
  "dry fruit",
  "green veg",
  "salad",
];

export const noItemFoundImageUrl =
  "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg&ga=GA1.2.1221302854.1694593979&semt=ais";
