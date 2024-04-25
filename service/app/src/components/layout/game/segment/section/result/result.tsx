"use client";
import * as React from "react";

export const Result: React.FC = () => {
  const wpm = 60.9;
  const acc = 100;
  const collect = 999;
  const incollect = 999;
  const miss = 999;
  const time = 60;

  return (
    <div className="w-full h-full px-96 py-4">
      <div className="w-full h-full">
        <div className="h-full flex flex-col justify-end">
          <div className="w-full h-4/5 flex flex-col justify-end">
            <div className="grid grid-cols-2">
              <div className="h-full grid grid-rows-2">
                <div className="w-full h-full text-6xl flex justify-center items-center">
                  {`WPM : ${wpm}`}
                </div>
                <div className="w-full h-full text-6xl flex justify-center items-center">
                  {`ACC : ${acc}%`}
                </div>
              </div>
              <div className="h-full grid grid-rows-2">
                <div />
                <div className="h-full grid grid-cols-2">
                  <div className="h-full grid grid-rows-2">
                    <div className="text-3xl">character</div>
                    <div className="text-3xl">{`${collect}/${incollect}/${miss}`}</div>
                  </div>
                  <div className="h-full grid grid-rows-2">
                    <div className="text-3xl">time</div>
                    <div className="text-3xl">{`${time}sec`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/5 flex justify-center items-end">
            スペースでリスタート
          </div>
        </div>
      </div>
    </div>
  );
};
