"use client";

import * as React from "react";
import "./key.css";
import { KeyProps } from "@/types/vkb/key/props";

export const Key: React.FC<KeyProps> = ({ symbol, kind, code, isPress }) => {
  return (
    <div
      id={`key-${code}`}
      className={`key ${kind}-key-size ${isPress && "active"}`}
    >
      {symbol ?? ""}
    </div>
  );
};
