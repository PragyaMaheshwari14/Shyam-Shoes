import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center py-12 px-4">
      <p className="text-2xl font-medium text-[#111111] font-krona tracking-tight">
        Subscribe now & get 20% off!
      </p>
      <p className="text-gray-500 mt-3">
        Subscribe to our newsletter for exclusive updates, latest collections,
        and special offers delivered right to your inbox
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-full"
      >
        <input
          className="w-full sm:flex-1 outline-none bg-[#faf9f8]"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <button
          type="submit"
          className="bg-[#111111] text-sky-50 text-md px-10 py-4 rounded-full"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
