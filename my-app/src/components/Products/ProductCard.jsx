const ProductCard = ({ product }) => {

    return (
        <div className="flex justify-space-between items-center mb-4 border p-1 rounded shadow cursor-pointer">
            <div className="flex items-center w-[85%]">
                <img src={product.thumbnail} alt="Product Thumbnail" className="object-cover w-[3rem] h-[3rem] rounded-lg mx-4 border" />
                <h3>{product.title}</h3>
            </div>
            <p className="w-[15%]">Price: {product.price}</p>
        </div>
    );
};

export default ProductCard;