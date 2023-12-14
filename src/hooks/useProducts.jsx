import { useEffect, useState } from "react";
import { getProducts } from "../services";

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