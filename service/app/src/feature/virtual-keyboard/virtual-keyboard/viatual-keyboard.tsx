"use client";

import * as React from 'react';
import { Key } from '../virtual-keyboard-key/key/key';
import { KeyKind } from '../virtual-keyboard-key/const/key-kinds';

export const VirtualKeyBoard: React.FC = () => {
    return (
        <div className='w-full h-full'>
            <Key symbol='A' kind={KeyKind.Standard} />
            <Key kind={KeyKind.Half} />
            <Key kind={KeyKind.Middle} />
            <Key kind={KeyKind.Large} />
            <Key kind={KeyKind.Space} />
        </div>
    );
}