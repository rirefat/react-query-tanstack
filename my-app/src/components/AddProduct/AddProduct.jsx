
const AddProduct = () => {
    return (
        <div className='px-4'>
            <h3 className="my-6 text-center text-2xl">Add Product</h3>

            <form className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Product Title"
                    className="input-border p-2"
                />
                <textarea
                    name="description"
                    id="description"
                    rows="5"
                    className="input-border p-2"
                    placeholder="Product Description"
                />
                <input
                    type="text"
                    placeholder="Image Thumbnail Link"
                    className="input-border p-2"
                />
                <span className="flex gap-2">
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="w-1/2 input-border p-2"
                        placeholder="Product Price" /
                    >
                    <input
                        type="number"
                        name="price"
                        id="price"
                        className="w-1/2 input-border p-2"
                        placeholder="Product Rating"
                    />
                    <select name="favourite" id="favourite" className="w-1/2 input-border p-2">
                        <option value="Favourite">Favourite</option>
                        <option value="notFavourite">Not Favourite</option>
                    </select>
                </span>
                <input type="submit" value="Submit" className="my-4 input-border p-2 cursor-pointer bg-zinc-300 hover:bg-zinc-400" />
            </form>
        </div>
    );
};

export default AddProduct;