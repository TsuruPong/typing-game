import * as React from 'react';
import { SectionState } from '@/config/section/state';

export const SectionContext = React.createContext<{
    subject: number;
    setSubject: React.Dispatch<React.SetStateAction<number>>;
}>({
    subject: SectionState.TOP,
    setSubject: () => {}
});