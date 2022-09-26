import React, { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import Singleproduct from "./singleproduct";
function AllProducts({ sort, filters, cat }) {
  const [product, setProduct] = useState([]);
  const [Filtereproduct, setFiltereProduct] = useState([]);
  useEffect(() => {
    const getProdcut = async () => {
      try {
        const response = await publicRequest.get(
          cat ? `/product?category=${cat}` : "/product"
        );
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProdcut();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFiltereProduct(
        product.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filters]);
  useEffect(() => {
    if (sort === "Letest") {
      setFiltereProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Cheapest") {
      setFiltereProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "Recommended") {
      setFiltereProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <>
      {cat
        ? Filtereproduct.map((item) => (
            <Singleproduct item={item} key={item._id} />
          ))
        : product.map((item) => <Singleproduct item={item} key={item._id} />)}
    </>
  );
}

export default AllProducts;
