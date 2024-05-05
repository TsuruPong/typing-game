import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const handakuons: Map<string, Letter> = new Map<string, Letter> ([
    // ぱ行
    [Hiragana.PA, {hiragana: Hiragana.PA, shiins: ['p'], boin: 'a'}],
    [Hiragana.PI, {hiragana: Hiragana.PI, shiins: ['p'], boin: 'i'}],
    [Hiragana.PU, {hiragana: Hiragana.PU, shiins: ['p'], boin: 'u'}],
    [Hiragana.PE, {hiragana: Hiragana.PE, shiins: ['p'], boin: 'e'}],
    [Hiragana.PO, {hiragana: Hiragana.PO, shiins: ['p'], boin: 'o'}],
]);