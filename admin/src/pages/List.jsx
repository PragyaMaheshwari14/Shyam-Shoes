import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const List = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const token = await getToken();
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const filteredList = list.filter((item) =>
    `${item.name} ${item.category} ${item.price}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">All Products List</p>
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-1 rounded w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            >
              <img
                className="w-12 h-12 object-cover rounded"
                src={
                  item.colors?.[0]?.images?.[0] ||
                  item.image?.[0] ||
                  "/fallback.png"
                }
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency} {item.price}
              </p>
              <div className="flex justify-evenly items-center">
                <p
                  onClick={() => removeProduct(item._id)}
                  className="text-right md:text-center cursor-pointer text-lg text-red-600"
                >
                  ✕
                </p>
                <p
                  onClick={() => navigate(`/edit/${item._id}`)}
                  className="text-right md:text-center cursor-pointer text-xl text-blue-600"
                >
                  <CiEdit />
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No products found.</p>
        )}
      </div>
    </>
  );
};

export default List;
