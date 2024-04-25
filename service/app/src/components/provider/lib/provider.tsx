"use client";

import * as React from "react";
import { ThemeProvider } from "@/libs/next-theme/theme-provider";
import { NextUiProvider } from "@/libs/nextui/nextui-provider";
import { CommonParentProps } from "@/types/common/parent/props";

export const AnyProvider: React.FC<CommonParentProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <NextUiProvider>{children}</NextUiProvider>
    </ThemeProvider>
  );
};
