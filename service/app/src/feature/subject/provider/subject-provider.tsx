"use client";

import * as React from 'react';
import { SubjectContext } from '../component/subject-context';
import { SubjectState } from '../const/subject-state';
import { StartMenuSubject } from '../part/start-menu-subject';
import { CountDownSubject } from '../part/countdown-subject';
import { GameProgressSubject } from '../part/game-progress-subject';
import { ResultSubject } from '../part/result-subject';

export const SubjectProvider: React.FC = () => {
    const [subject, setSubject] = React.useState<number>(SubjectState.RESULT);
    const subjects = new Map<number, React.ReactNode>([
        [SubjectState.START, <StartMenuSubject />],
        [SubjectState.COUNTDOWN, <CountDownSubject />],
        [SubjectState.GAMEPROGRESS, <GameProgressSubject />],
        [SubjectState.RESULT, <ResultSubject />]
    ]);
    return (
        <SubjectContext.Provider value={{subject, setSubject}}>
            {subjects.get(subject)}
        </SubjectContext.Provider>
    );
}