"use client";

import * as React from "react";

import { ThemeProvider } from "@/libs/next-theme/themeProvider";
import { NextUiProvider } from "@/libs/nextui/nextuiProvider";
import { CommonParentProps } from "@/types/common/parent/props";

export const AnyProvider: React.FC<CommonParentProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <NextUiProvider>{children}</NextUiProvider>
    </ThemeProvider>
  );
};
