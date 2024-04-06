"use client";

import * as React from 'react';
import { Key } from '../virtual-keyboard-key/key/key';
import { KeyKind } from '../virtual-keyboard-key/const/key-kinds';

export const VirtualKeyBoard: React.FC = () => {
    return (
        <div className='flex items-center'>
            <div className='grid grid-rows-5 mx-auto my-0'>
                <div className='flex'>
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.HALFLARGE} />
                </div>
                <div className='flex'>
                    <Key kind={KeyKind.MEDIUM} />
                    <Key symbol='Q' kind={KeyKind.TINY} />
                    <Key symbol='W' kind={KeyKind.TINY} />
                    <Key symbol='E' kind={KeyKind.TINY} />
                    <Key symbol='R' kind={KeyKind.TINY} />
                    <Key symbol='T' kind={KeyKind.TINY} />
                    <Key symbol='Y' kind={KeyKind.TINY} />
                    <Key symbol='U' kind={KeyKind.TINY} />
                    <Key symbol='I' kind={KeyKind.TINY} />
                    <Key symbol='O' kind={KeyKind.TINY} />
                    <Key symbol='P' kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.TINY} />
                    <Key kind={KeyKind.MEDIUM} />
                </div>
                <div className='flex'>
                    <Key kind={KeyKind.HALFLARGE} />
                    <Key symbol='A' kind={KeyKind.TINY} />
                    <Key symbol='S' kind={KeyKind.TINY} />
                    <Key symbol='D' kind={KeyKind.TINY} />
                    <Key symbol='F' kind={KeyKind.TINY} />
                    <Key symbol='G' kind={KeyKind.TINY} />
                    <Key symbol='H' kind={KeyKind.TINY} />
                    <Key symbol='J' kind={KeyKind.TINY} />
                    <Key symbol='K' kind={KeyKind.TINY} />
                    <Key symbol='L' kind={KeyKind.TINY} />
                    <Key symbol='' kind={KeyKind.TINY} />
                    <Key symbol='' kind={KeyKind.TINY} />
                    <Key kind={KeyKind.HALFLARGE} />
                </div>
                <div className='flex'>
                    <Key kind={KeyKind.LARGE} />
                    <Key symbol='Z' kind={KeyKind.TINY} />
                    <Key symbol='X' kind={KeyKind.TINY} />
                    <Key symbol='C' kind={KeyKind.TINY} />
                    <Key symbol='V' kind={KeyKind.TINY} />
                    <Key symbol='B' kind={KeyKind.TINY} />
                    <Key symbol='N' kind={KeyKind.TINY} />
                    <Key symbol='M' kind={KeyKind.TINY} />
                    <Key symbol='' kind={KeyKind.TINY} />
                    <Key symbol='' kind={KeyKind.TINY} />
                    <Key symbol='' kind={KeyKind.TINY} />
                    <Key kind={KeyKind.LARGE} />
                </div>
                <div className='flex'>
                    <Key kind={KeyKind.SMALL} />
                    <Key kind={KeyKind.SMALL} />
                    <Key kind={KeyKind.SMALL} />
                    <Key kind={KeyKind.SPACE} />
                    <Key kind={KeyKind.SMALL} />
                    <Key kind={KeyKind.SMALL} />
                    <Key kind={KeyKind.SMALL} />
                    <Key kind={KeyKind.SMALL} />
                </div>
            </div>
        </div>

    );
}