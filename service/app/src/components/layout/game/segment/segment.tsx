"use client";

import * as React from "react";
import { SectionContext } from "@/utils/section/context/context";
import { SectionState } from "@/const/section/state";
import { Top } from "@/components/layout/game/segment/section/top/top";
import { CountDown } from "@/components/layout/game/segment/section/countdown/countdown";
import { Game } from "@/components/layout/game/segment/section/game/game";
import { Result } from "@/components/layout/game/segment/section/result/result";

export const GameSegment: React.FC = () => {
  const [subject, setSubject] = React.useState<number>(SectionState.GAME);
  const subjects = new Map<number, React.ReactNode>([
    [SectionState.TOP, <Top />],
    [SectionState.COUNTDOWN, <CountDown />],
    [SectionState.GAME, <Game />],
    [SectionState.RESULT, <Result />],
  ]);
  return (
    <SectionContext.Provider value={{ subject, setSubject }}>
      {subjects.get(subject)}
    </SectionContext.Provider>
  );
};
