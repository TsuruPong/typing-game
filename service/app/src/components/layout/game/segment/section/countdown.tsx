"use client";
import * as React from "react";

export const CountDown: React.FC = () => {
  const count = 3;
  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto my-0">{count}</div>
    </div>
  );
};
