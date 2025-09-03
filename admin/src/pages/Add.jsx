import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Sports Shoes");
  const [sizes, setSizes] = useState([]);

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const token = await getToken();
      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const renderUploadBox = (image, setImage, id) => (
    <label htmlFor={id} className="cursor-pointer">
      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center border rounded bg-gray-100 hover:bg-gray-200">
          <FaPlus className="text-gray-500 text-xl" />
        </div>
      ) : (
        <div className="relative w-20 h-20">
          <img
            src={URL.createObjectURL(image)}
            className="w-20 h-20 object-cover rounded"
            alt="preview"
          />
          <button
            type="button"
            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
            onClick={() => setImage(false)}
          >
            <FaTrash size={12} />
          </button>
        </div>
      )}
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id={id}
        hidden
      />
    </label>
  );

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {renderUploadBox(image1, setImage1, "image1")}
          {renderUploadBox(image2, setImage2, "image2")}
          {renderUploadBox(image3, setImage3, "image3")}
          {renderUploadBox(image4, setImage4, "image4")}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
            value={category}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2"
            value={subCategory}
          >
            <option value="Sports Shoes">Sports Shoes</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Leather Shoes">Leather Shoes</option>
            <option value="Slippers">Slippers</option>
            <option value="Sandals">Sandals</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            type="number"
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="25"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3 flex-wrap">
          {["4UK", "5UK", "6UK", "7UK", "8UK", "9UK", "10UK"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
            >
              <p
                className={`${
                  sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">
        Add
      </button>
    </form>
  );
};

export default Add;
