"use client";

import * as React from 'react';
import { KeyProps } from '@/feature/virtual-keyboard/virtual-keyboard-key/type/virtual-keybord-key';
import '../key.css';

export const Key: React.FC<KeyProps> = ({symbol, kind, isSymbolDisplay}) => {
    return (
        <div id={`key-${symbol}`} className={`key ${kind}-key-size`}>
            {isSymbolDisplay && symbol}
        </div>
    );
}