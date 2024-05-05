"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { CommonPrentProps } from "@/types/common/parent/props";

export const NextUiProvider: React.FC<CommonPrentProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
