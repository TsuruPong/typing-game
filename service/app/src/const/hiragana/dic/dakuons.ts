import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const dakuons: Map<string, Letter> = new Map<string, Letter> ([
    // が行
    [Hiragana.GA, {hiragana: Hiragana.GA, shiin: ['g'], boin: 'a'}],
    [Hiragana.GI, {hiragana: Hiragana.GI, shiin: ['g'], boin: 'i'}],
    [Hiragana.GU, {hiragana: Hiragana.GU, shiin: ['g'], boin: 'u'}],
    [Hiragana.GE, {hiragana: Hiragana.GE, shiin: ['g'], boin: 'e'}],
    [Hiragana.GO, {hiragana: Hiragana.GO, shiin: ['g'], boin: 'o'}],

    // ざ行
    [Hiragana.ZA, {hiragana: Hiragana.ZA, shiin: ['z'], boin: 'a'}],
    [Hiragana.ZI, {hiragana: Hiragana.ZI, shiin: ['z'], boin: 'i'}],
    [Hiragana.ZU, {hiragana: Hiragana.ZU, shiin: ['z'], boin: 'u'}],
    [Hiragana.ZE, {hiragana: Hiragana.ZE, shiin: ['z'], boin: 'e'}],
    [Hiragana.ZO, {hiragana: Hiragana.ZO, shiin: ['z'], boin: 'o'}],

    // だ行
    [Hiragana.DA, {hiragana: Hiragana.DA, shiin: ['d'], boin: 'a'}],
    [Hiragana.DI, {hiragana: Hiragana.DI, shiin: ['d'], boin: 'i'}],
    [Hiragana.DU, {hiragana: Hiragana.DU, shiin: ['d'], boin: 'u'}],
    [Hiragana.DE, {hiragana: Hiragana.DE, shiin: ['d'], boin: 'e'}],
    [Hiragana.DO, {hiragana: Hiragana.DO, shiin: ['d'], boin: 'o'}],

    // ば行
    [Hiragana.BA, {hiragana: Hiragana.BA, shiin: ['b'], boin: 'a'}],
    [Hiragana.BI, {hiragana: Hiragana.BI, shiin: ['b'], boin: 'i'}],
    [Hiragana.BU, {hiragana: Hiragana.BU, shiin: ['b'], boin: 'u'}],
    [Hiragana.BE, {hiragana: Hiragana.BE, shiin: ['b'], boin: 'e'}],
    [Hiragana.BO, {hiragana: Hiragana.BO, shiin: ['b'], boin: 'o'}],

    // ヴぁ行
    [Hiragana.VA, {hiragana: Hiragana.VA, shiin: ['v'], boin: 'a'}],
    [Hiragana.VI, {hiragana: Hiragana.VI, shiin: ['v'], boin: 'i'}],
    [Hiragana.VU, {hiragana: Hiragana.VU, shiin: ['v'], boin: 'u'}],
    [Hiragana.VE, {hiragana: Hiragana.VE, shiin: ['v'], boin: 'e'}],
    [Hiragana.VO, {hiragana: Hiragana.VO, shiin: ['v'], boin: 'o'}],
]);