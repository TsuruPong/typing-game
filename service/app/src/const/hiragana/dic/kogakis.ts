import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const kogakis: Map<string, Letter> = new Map<string, Letter>([
    // ぁ行
    [Hiragana.XA, {hiragana: Hiragana.XA, shiin: ['x', 'l'], boin: 'a'}],
    [Hiragana.XI, {hiragana: Hiragana.XA, shiin: ['x', 'l'], boin: 'i'}],
    [Hiragana.XI, {hiragana: Hiragana.XA, shiin: ['x', 'l'], boin: 'u'}],
    [Hiragana.XE, {hiragana: Hiragana.XA, shiin: ['x', 'l'], boin: 'e'}],
    [Hiragana.XO, {hiragana: Hiragana.XA, shiin: ['x', 'l'], boin: 'o'}],

    // っ
    [Hiragana.XA, {hiragana: Hiragana.XA, shiin: ['xt', 'lt', 'xts', 'lts'], boin: 'u'}],

    // ゃ行
    [Hiragana.XYA, {hiragana: Hiragana.XYA, shiin: ['xy', 'ly'], boin: 'a'}],
    [Hiragana.XYU, {hiragana: Hiragana.XYU, shiin: ['xy', 'ly'], boin: 'u'}],
    [Hiragana.XYO, {hiragana: Hiragana.XYO, shiin: ['xy', 'ly'], boin: 'o'}],
]);