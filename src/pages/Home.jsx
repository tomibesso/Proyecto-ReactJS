import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {

    useEffect (() => {
        document.title = "Mi Tienda - Home";
    })

    const {productsData} = useGetProducts(15);

  return (
    <ItemListContainer productsData = {productsData} />
  )
}