"use client";

import * as React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { StandardReactNode } from '@/components/type/standard-reactnode';

export const NextUiProvider: React.FC<StandardReactNode> = ({children}) => {
    return <NextUIProvider>{children}</NextUIProvider>
}