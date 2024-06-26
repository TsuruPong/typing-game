import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const kogakis: Map<string, Letter> = new Map<string, Letter>([
    // ぁ行
    [Hiragana.XA, {hiragana: Hiragana.XA, shiins: ['x', 'l'], boin: 'a'}],
    [Hiragana.XI, {hiragana: Hiragana.XI, shiins: ['x', 'l'], boin: 'i'}],
    [Hiragana.XI, {hiragana: Hiragana.XU, shiins: ['x', 'l'], boin: 'u'}],
    [Hiragana.XE, {hiragana: Hiragana.XE, shiins: ['x', 'l'], boin: 'e'}],
    [Hiragana.XO, {hiragana: Hiragana.XO, shiins: ['x', 'l'], boin: 'o'}],

    // っ
    [Hiragana.XTU, {hiragana: Hiragana.XTU, shiins: ['xt', 'lt', 'xts', 'lts'], boin: 'u'}],

    // ゃ行
    [Hiragana.XYA, {hiragana: Hiragana.XYA, shiins: ['xy', 'ly'], boin: 'a'}],
    [Hiragana.XYU, {hiragana: Hiragana.XYU, shiins: ['xy', 'ly'], boin: 'u'}],
    [Hiragana.XYO, {hiragana: Hiragana.XYO, shiins: ['xy', 'ly'], boin: 'o'}],
]);