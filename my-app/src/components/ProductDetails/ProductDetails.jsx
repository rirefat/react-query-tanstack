import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retriveProduct = async ({ queryKey }) => {
    const response = await axios.get(`http://localhost:8000/${queryKey[0]}/${queryKey[1]}`);
    return response.data;
}

const ProductDetails = ({ id }) => {
    const { data: product, error, isLoading } = useQuery({
        queryKey: ["products", id],
        queryFn: retriveProduct,
    })

    if (error) return <p>An error occured: {error.message}</p>
    if (isLoading) return <p>Fetching product data...</p>
    return (
        <div className='my-4'>
            <h3 className=" text-2xl text-center">Product Details</h3>

            <div className="flex items-center justify-center h-[90vh]">
                <div className="product-card border shadow rounded-xl overflow-hidden">
                    <img src={product?.thumbnail} alt="Product Thumbnail" />
                    <div className="p-4 relative">
                        <h2 className="text-2xl font-semibold">{product?.title}</h2>
                        <p className="">Description: {product?.description}</p>
                        <p>Price: {product?.price}</p>
                        <p>Rating: {product?.rating}</p>

                        <div className="btns mt-4">
                            <button className="border-2 mr-4 px-4 py-2 rounded-lg">Delete</button>
                            <button className="border-2 mr-4 px-4 py-2 rounded-lg">Edit</button>
                        </div>

                        <span className="absolute top-5 right-5">
                            <FaHeart /> <FaRegHeart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;