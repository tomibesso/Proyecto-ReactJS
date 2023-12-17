import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router';
import { useGetProductByCategory } from '../hooks/useProducts';

export const Category = () => {

    const {id} = useParams();

    const {productsData} = useGetProductByCategory(id);

  return (
    <ItemListContainer productsData={productsData} />
  )
}
