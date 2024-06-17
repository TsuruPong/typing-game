"use client";
import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  generateMoraTree,
  generatePredictionTextFromSentence,
} from "@/feature/sentence/generator";
import useKeyboardInput from "@/hooks/useKeyboardInput";
import { TreeNode } from "@/domain/structure/tree";

export const Game: React.FC = () => {
  const limit = 20;
  const keyInput = useKeyboardInput();

  type Sentence = {
    text: string;
    ruby: string;
  };

  css`
    .letter {
      display: none;
    }
    .aaa {
      color: #fff;
      color: #f00;
      color: #647488;
    }
  `;

  const [sentence, setSentence] = React.useState<Sentence>({} as Sentence);
  const [tree, setTree] = React.useState<TreeNode>();

  React.useEffect(() => {
    const sentence = {
      text: "東京特許許可局許可局長",
      ruby: "とうきょうとっきょきょかきょくきょかきょくちょう",
    };
    setSentence(sentence);
    const moras = generatePredictionTextFromSentence(sentence.ruby);
    const tree = generateMoraTree(moras);
    setTree(tree);
  }, []);

  type P = {
    node?: TreeNode;
  };

  const Rec: React.FC<P> = ({ node }) => {
    return (
      <>
        <span key={Math.random()} className="letter">
          {node && node.value && node.value}
        </span>
        {node && node.nodes && 0 < node.nodes.length && (
          <Rec node={node.nodes[0]} />
        )}
      </>
    );
  };

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
            <div className="flex gap-px">
              {tree && <Rec node={tree.nodes[0]} />}
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
