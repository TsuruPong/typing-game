"use client";

import * as React from 'react';
import { KeyProps } from '@/feature/virtual-keyboard/virtual-keyboard-key/type/virtual-keybord-key';
import '../key.css';

export const Key: React.FC<KeyProps> = ({symbol, kind}) => {
    return (
        <div className={`key ${kind}-key-size`}>
            {symbol}
        </div>
    );
}