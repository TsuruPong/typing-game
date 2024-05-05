"use client";

import * as React from 'react';

const useKeyboardInput = () => {
    const [keysPressed, setKeysPressed] = React.useState<Set<string>>(new Set());

    const handleKeyDown = (event: KeyboardEvent) => {
      setKeysPressed((prevKeysPressed) => new Set([...prevKeysPressed, event.key]));
    };
  
    const handleKeyUp = (event: KeyboardEvent) => {
      setKeysPressed((prevKeysPressed) => {
        const newKeysPressed = new Set(prevKeysPressed);
        newKeysPressed.delete(event.key);
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