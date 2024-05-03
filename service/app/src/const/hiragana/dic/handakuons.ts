import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const handakuons: Map<string, Letter> = new Map<string, Letter> ([
    // ぱ行
    [Hiragana.PA, {hiragana: Hiragana.PA, shiin: ['p'], boin: 'a'}],
    [Hiragana.PI, {hiragana: Hiragana.PI, shiin: ['p'], boin: 'i'}],
    [Hiragana.PU, {hiragana: Hiragana.PU, shiin: ['p'], boin: 'u'}],
    [Hiragana.PE, {hiragana: Hiragana.PE, shiin: ['p'], boin: 'e'}],
    [Hiragana.PO, {hiragana: Hiragana.PO, shiin: ['p'], boin: 'o'}],
]);