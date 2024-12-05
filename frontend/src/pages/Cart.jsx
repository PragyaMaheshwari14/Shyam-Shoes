import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

import bin_icon from "../assets/bin_icon.png"

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products?.length > 0 && cartItems) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="py-10 mt-[15vw] lg:mt-[5vw] min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] transition-opacity ease-in duration-500 opacity-100">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, i) => {
          const productsData = products.find(
            (product) => product._id === item._id
          );

          // Safeguard against undefined productsData
          if (!productsData) {
            return (
              <div key={i} className="py-4 border-t border-b text-gray-700">
                <p className="text-red-500">
                  Product not found for ID: {item._id}
                </p>
              </div>
            );
          }

          return (
            <div
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={i}
            >
              <div className="flex items-start gap-6">
                <img
                  src={productsData.image?.[0] || assets.default_image} // Fallback image
                  className="w-16 sm:w-20"
                  alt={productsData.name || "Product"}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productsData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productsData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-stale-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />
              <img
                src={bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt="Delete"
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-[#111111] text-sky-50 text-sm my-8 px-8 py-3"
              onClick={() => navigate("/place-order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
