import React from "react";

const FeaturedProducts = () => {
  const data = [{}, {}, {}, {}];
  return (
    <div className="h-[700px]">
      <h1 className="text-3xl font-bold text-center mt-28 text-primary">
        Featured Products
      </h1>
      <div className="h-[360px] flex flex-row justify-center gap-x-8 mt-12">
        {data.map((item: any) => (
          <div className="w-64 h-full shadow-lg">
            <img
              className="h-[236px] w-full bg-purple-100"
              src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80"
              alt="product-img"
            />
            <div className="flex flex-col items-center flex-1 p-3">
              <h3 className="text-lg font-medium text-pink-600">
                Cantilever chair
              </h3>
              <div className="flex flex-row justify-between my-2 gap-x-1">
                <div className="w-3 h-1 bg-green-400 rounded-lg" />
                <div className="w-3 h-1 bg-pink-600 rounded-lg" />
                <div className="w-3 h-1 bg-blue-900 rounded-lg" />
              </div>
              <div className="my-2 text-sm font-medium text-primary">
                Code - Y523201
              </div>
              <div className="text-sm text-primary font-regular">$48.00</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
