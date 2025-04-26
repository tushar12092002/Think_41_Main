import React from "react";
import Boot41Flow from "./Boot41Flow";
import Boot41Banner from "./Boot41Banner";

const Boot41FlowFrame = () => (
  <div className="w-[1200px] mx-auto mt-[64px] bg-transparent rounded-none shadow-none backdrop-filter-none flex flex-col items-stretch pb-[24px] box-border">
    <Boot41Flow />
    <Boot41Banner />
  </div>
);

export default Boot41FlowFrame;