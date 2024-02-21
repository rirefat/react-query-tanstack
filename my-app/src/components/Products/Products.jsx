import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const retrieveProducts = async () => {
    const response = await axios.get('http://localhost:8000/products');
    return response.data;
}
const Products = () => {
    const { data: products, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: retrieveProducts
    });

    if (isLoading) return <p>Fetching products...</p>
    if (error) return <p>An Error occured while fetching products: {error.message}</p>
    console.log(products)
    return (
        <div className='mx-4 '>
            <h2 className='mb-4 text-xl'>Available Products</h2>
            <div className='overflow-y-scroll h-[50vh]'>
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id1} product={product} />
                    ))
                }
            </div>
        </div>

    );
};

export default Products;