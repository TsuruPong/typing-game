import * as React from 'react';
import { SectionState } from '@/const/section/state';

export const SectionContext = React.createContext<{
    subject: number;
    setSubject: React.Dispatch<React.SetStateAction<number>>;
}>({
    subject: SectionState.TOP,
    setSubject: () => {}
});