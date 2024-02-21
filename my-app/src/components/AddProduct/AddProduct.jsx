import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        "title": "",
        "description": "",
        "thumbnail": "",
        "price": '',
        "rating": '',
        "favourite": ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'number' ? event.target.valueAsNumber :
            event.target.type === "boolean" ? event.target.valueAsBoolean : event.target.value;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const mutation = useMutation({
        mutationFn: (newProduct) => {
            axios.post("http://localhost:8000/products", newProduct)
        }
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newData = {
            ...formData,
            id: crypto.randomUUID().toString()
        };
        mutation.mutate(newData);
        setFormData({
            "title": "",
            "description": "",
            "thumbnail": "",
            "price": '',
            "rating": '',
            "favourite": ''
        })
    }

    return (
        <div className='px-4'>
            <h3 className="my-6 text-center text-2xl">Add Product</h3>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
                <input
                    required
                    type="text"
                    placeholder="Product Title"
                    className="input-border p-2"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <textarea
                    required
                    id="description"
                    rows="5"
                    className="input-border p-2"
                    placeholder="Product Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input
                    required
                    type="url"
                    placeholder="Image Thumbnail Link"
                    className="input-border p-2"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                />
                <span className="flex gap-2">
                    <input
                        required
                        type="number"
                        id="price"
                        className="w-1/2 input-border p-2"
                        placeholder="Product Price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="number"
                        min={1}
                        max={5}
                        id="rating"
                        className="w-1/2 input-border p-2"
                        placeholder="Product Rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                    />
                    <select
                        required
                        id="favourite"
                        className="w-1/2 input-border p-2"
                        name="favourite"
                        value={formData.favourite}
                        onChange={handleChange}
                    >
                        <option value="true">Favourite</option>
                        <option value="false">Not Favourite</option>
                    </select>
                </span>
                <input type="submit" value="Submit" className="my-4 input-border p-2 cursor-pointer bg-zinc-300 hover:bg-zinc-200" />
            </form>
        </div>
    );
};

export default AddProduct;