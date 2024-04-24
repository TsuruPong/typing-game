import * as React from 'react';
import { SubjectState } from '../const/subject-state';

export const SubjectContext = React.createContext<{
    subject: number;
    setSubject: React.Dispatch<React.SetStateAction<number>>;
}>({
    subject: SubjectState.START,
    setSubject: () => {}
});