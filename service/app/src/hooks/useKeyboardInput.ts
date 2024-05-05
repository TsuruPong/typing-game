"use client";

import * as React from 'react';

const useKeyboardInput = () => {
    const [keysPressed, setKeysPressed] = React.useState<Set<string>>(new Set());
    const ignoreKeys: string[] = [
        "Tab",
        "Caps",
        "MetaLeft",
        "MetaRight",
        "AltLeft",
        "AltRight"
    ];

    const handleKeyDown = (event: KeyboardEvent) => {
        if (ignoreKeys.includes(event.code)) return;
        setKeysPressed((prevKeysPressed) => new Set([...prevKeysPressed, event.code]));
    };
  
    const handleKeyUp = (event: KeyboardEvent) => {
        if (ignoreKeys.includes(event.code)) return;
        setKeysPressed((prevKeysPressed) => {
            const newKeysPressed = new Set(prevKeysPressed);
            newKeysPressed.delete(event.code);
            return newKeysPressed;
        });
    };
  
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    
    return Array.from(keysPressed);
}

export default useKeyboardInput;