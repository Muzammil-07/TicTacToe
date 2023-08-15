import React from "react";
import Board from "../../components/board";
import Sidebar from "@/components/sidebar";
const Index = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-[1fr_4fr]">
      <Sidebar />
      <Board />
    </div>
  );
};

export default Index;
