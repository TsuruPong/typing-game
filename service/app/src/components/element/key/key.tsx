"use client";

import * as React from "react";
import { KeyProps } from "@/types/vkb/key/props";
import "./key.css";

export const Key: React.FC<KeyProps> = ({ symbol, kind, isSymbolDisplay }) => {
  return (
    <div id={`key-${symbol}`} className={`key ${kind}-key-size`}>
      {isSymbolDisplay && symbol}
    </div>
  );
};
