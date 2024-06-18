"use client";
import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import useKeyboardInput from "@/hooks/useKeyboardInput";

export const Game: React.FC = () => {
  const limit = 20;
  const keyInput = useKeyboardInput();

  type Sentence = {
    text: string;
    ruby: string;
  };

  const [sentence, setSentence] = React.useState<Sentence>({} as Sentence);

  React.useEffect(() => {
    const sentence = {
      text: "東京特許許可局許可局長",
      ruby: "とうきょうとっきょきょかきょくきょかきょくちょう",
    };
    setSentence(sentence);
  }, []);

  return (
    <div className="h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7">
      <div />
      <div className="flex justify-center items-center">
        <div className="w-fit flex flex-col">
          <div className="select-none text">
            <span className="timer">{limit}</span>
          </div>
          <div className="select-none text">{sentence.text}</div>
          <div className="select-none text">{sentence.ruby}</div>
          <div />
          <div className="select-none text">
            <div className="flex gap-px">aaa</div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
