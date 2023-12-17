import { useEffect, useState } from "react";
import { getCategories } from "../services";


export const useCategories = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
      getCategories()
        .then((res) => {
          // Capitaliza la primera letra de cada categoría
          const categoriasCapitalizadas = res.data.map(category =>
            category.charAt(0).toUpperCase() + category.slice(1)
          );
          setCategories(categoriasCapitalizadas);
        })
        .catch((error) => console.log(error));
    }, []);

  return { categories }
}
