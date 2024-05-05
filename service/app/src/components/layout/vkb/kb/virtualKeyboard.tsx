"use client";

import * as React from "react";
import { Key } from "@/components/element/key/key";
import { KeyConfig, KeyConfigType } from "@/const/key/config";

export const VirtualKeyBoard: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-rows-5">
        {KeyConfig.map((line, i) => {
          return (
            <div key={`key-line${i}`} className="flex">
              {line.map((key: KeyConfigType) => {
                return (
                  <Key
                    key={`key-${key.symbol}`}
                    symbol={key.symbol}
                    kind={key.kind}
                    isSymbolDisplay={key.isSymbolDisplay}
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
