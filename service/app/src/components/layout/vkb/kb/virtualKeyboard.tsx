"use client";

import * as React from "react";
import { Key } from "@/components/element/key/key";
import { KeyConfig, KeyConfigType } from "@/const/key/config";
import useKeyboardInput from "@/hooks/useKeyboardInput";

export const VirtualKeyBoard: React.FC = () => {
  const keyInput = useKeyboardInput();

  return (
    <div className="flex justify-center">
      <div className="grid grid-rows-5">
        {KeyConfig.map((line, i) => {
          return (
            <div key={`key-line${i}`} className="flex">
              {line.map((key: KeyConfigType) => {
                return (
                  <Key
                    key={`key-${key.code}`}
                    symbol={key.symbol}
                    kind={key.kind}
                    code={key.code}
                    isPress={keyInput.includes(key.code)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
