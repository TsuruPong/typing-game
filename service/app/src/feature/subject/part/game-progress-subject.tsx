"use client";
import * as React from 'react';
import { motion } from 'framer-motion';

import '../subject.css';

export const GameProgressSubject: React.FC = () => {
    const limit = 20;
    return (
        <div className='h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7'>
            <div />
            <div className='flex justify-center items-center'>
                <div className='w-fit flex flex-col'>
                    <div className='select-none text'>
                        <span className='timer'>{limit}</span>
                    </div>
                    <div className='select-none text'>
                        太陽系の起源は、長い間、様々な憶測を呼んできた。
                    </div>
                    <div className='select-none text'>
                        たいようけいのきげんは、ながいあいだ、さまざあまなおくそくをよんできた。
                    </div>
                    <div />
                    <div className='select-none text'>
                        <span className='letter collect'>t</span>
                        <span className='letter uncollect'>a</span>
                        <motion.div
                            className='calette'
                            animate={{opacity: 0}}
                            transition={{repeat: Infinity, repeatType: "mirror", duration: 0.5}}
                        />
                        <span className='letter'>i</span>
                        <span className='letter'>y</span>
                        <span className='letter'>o</span>
                        <span className='letter'>u</span>
                        <span className='letter'>k</span>
                        <span className='letter'>e</span>
                        <span className='letter'>i</span>
                    </div>
                </div>
            </div>
            <div />
        </div>
    )
}