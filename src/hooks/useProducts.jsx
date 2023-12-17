import { useEffect, useState } from "react";
import { getProductById, getProducts, getProductByCategory } from "../services";

export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
      getProducts(limit)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
    }, []);

    return {productsData};
}

export const useGetProductById = (productId) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProductById(productId)
    .then((response) => {
      setProductData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, {});

  return {productData};
}

export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductByCategory(category)
    .then((response) => {
      setProductsData(response.data.products);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [category]);

  return {productsData};
}