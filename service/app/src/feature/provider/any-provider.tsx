"use client";

import StandardReactNode from '@/components/type/standard-reactnode';
import { ThemeProvider } from '@/libs/next-theme/theme-provider';
import { NextUiProvider } from '@/libs/nextui/nextui-provider';
import * as React from 'react';

export const AnyProvider: React.FC<StandardReactNode> = ({children}) => {
    return (
        <ThemeProvider>
            <NextUiProvider>
                {children}
            </NextUiProvider>
        </ThemeProvider>
    );
}