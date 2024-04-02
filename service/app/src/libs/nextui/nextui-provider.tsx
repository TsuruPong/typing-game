"use client";

import { NextUIProvider } from "@nextui-org/react";
import * as React from 'react';

type UiProviderProps = {
    children: React.ReactNode
}

export const NextUiProvider: React.FC<UiProviderProps> = ({children}) => {
    return <NextUIProvider>{children}</NextUIProvider>
}