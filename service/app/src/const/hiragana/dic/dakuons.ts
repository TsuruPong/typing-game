import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const dakuons: Map<string, Letter> = new Map<string, Letter> ([
    // が行
    [Hiragana.GA, {hiragana: Hiragana.GA, shiins: ['g'], boin: 'a'}],
    [Hiragana.GI, {hiragana: Hiragana.GI, shiins: ['g'], boin: 'i'}],
    [Hiragana.GU, {hiragana: Hiragana.GU, shiins: ['g'], boin: 'u'}],
    [Hiragana.GE, {hiragana: Hiragana.GE, shiins: ['g'], boin: 'e'}],
    [Hiragana.GO, {hiragana: Hiragana.GO, shiins: ['g'], boin: 'o'}],

    // ざ行
    [Hiragana.ZA, {hiragana: Hiragana.ZA, shiins: ['z'], boin: 'a'}],
    [Hiragana.ZI, {hiragana: Hiragana.ZI, shiins: ['z'], boin: 'i'}],
    [Hiragana.ZU, {hiragana: Hiragana.ZU, shiins: ['z'], boin: 'u'}],
    [Hiragana.ZE, {hiragana: Hiragana.ZE, shiins: ['z'], boin: 'e'}],
    [Hiragana.ZO, {hiragana: Hiragana.ZO, shiins: ['z'], boin: 'o'}],

    // だ行
    [Hiragana.DA, {hiragana: Hiragana.DA, shiins: ['d'], boin: 'a'}],
    [Hiragana.DI, {hiragana: Hiragana.DI, shiins: ['d'], boin: 'i'}],
    [Hiragana.DU, {hiragana: Hiragana.DU, shiins: ['d'], boin: 'u'}],
    [Hiragana.DE, {hiragana: Hiragana.DE, shiins: ['d'], boin: 'e'}],
    [Hiragana.DO, {hiragana: Hiragana.DO, shiins: ['d'], boin: 'o'}],

    // ば行
    [Hiragana.BA, {hiragana: Hiragana.BA, shiins: ['b'], boin: 'a'}],
    [Hiragana.BI, {hiragana: Hiragana.BI, shiins: ['b'], boin: 'i'}],
    [Hiragana.BU, {hiragana: Hiragana.BU, shiins: ['b'], boin: 'u'}],
    [Hiragana.BE, {hiragana: Hiragana.BE, shiins: ['b'], boin: 'e'}],
    [Hiragana.BO, {hiragana: Hiragana.BO, shiins: ['b'], boin: 'o'}],

    // ヴぁ行
    [Hiragana.VA, {hiragana: Hiragana.VA, shiins: ['v'], boin: 'a'}],
    [Hiragana.VI, {hiragana: Hiragana.VI, shiins: ['v'], boin: 'i'}],
    [Hiragana.VU, {hiragana: Hiragana.VU, shiins: ['v'], boin: 'u'}],
    [Hiragana.VE, {hiragana: Hiragana.VE, shiins: ['v'], boin: 'e'}],
    [Hiragana.VO, {hiragana: Hiragana.VO, shiins: ['v'], boin: 'o'}],
]);