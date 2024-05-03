import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";

export const gojuons: Map<string, Letter> = new Map<string, Letter>([
    // あ行
    [Hiragana.A, {hiragana: Hiragana.A, boin: 'a'}],
    [Hiragana.I, {hiragana: Hiragana.I, boin: 'i'}],
    [Hiragana.U, {hiragana: Hiragana.U, boin: 'u'}],
    [Hiragana.E, {hiragana: Hiragana.E, boin: 'e'}],
    [Hiragana.O, {hiragana: Hiragana.O, boin: 'o'}],

    // か行
    [Hiragana.KA, {hiragana: Hiragana.KA, shiin: ['k', 'c'], boin: 'a'}],
    [Hiragana.KI, {hiragana: Hiragana.KI, shiin: ['k'], boin: 'i'}],
    [Hiragana.KU, {hiragana: Hiragana.KU, shiin: ['k', 'c'], boin: 'u'}],
    [Hiragana.KE, {hiragana: Hiragana.KE, shiin: ['k'], boin: 'e'}],
    [Hiragana.KO, {hiragana: Hiragana.KO, shiin: ['k', 'c'], boin: 'o'}],

    // さ行
    [Hiragana.SA, {hiragana: Hiragana.SA, shiin: ['s'], boin: 'a'}],
    [Hiragana.SI, {hiragana: Hiragana.SI, shiin: ['s', 'sh', 'c'], boin: 'i'}],
    [Hiragana.SU, {hiragana: Hiragana.SU, shiin: ['s'], boin: 'u'}],
    [Hiragana.SE, {hiragana: Hiragana.SE, shiin: ['s', 'c'], boin: 'e'}],
    [Hiragana.SO, {hiragana: Hiragana.SO, shiin: ['s'], boin: 'o'}],

    // た行
    [Hiragana.TA, {hiragana: Hiragana.TA, shiin: ['t'], boin: 'a'}],
    [Hiragana.TI, {hiragana: Hiragana.TI, shiin: ['t', 'ch'], boin: 'i'}],
    [Hiragana.TU, {hiragana: Hiragana.TU, shiin: ['t', 'tsu'], boin: 'u'}],
    [Hiragana.TE, {hiragana: Hiragana.TE, shiin: ['t'], boin: 'e'}],
    [Hiragana.TO, {hiragana: Hiragana.TO, shiin: ['t'], boin: 'o'}],
    
    // な行
    [Hiragana.NA, {hiragana: Hiragana.NA, shiin: ['n'], boin: 'a'}],
    [Hiragana.NI, {hiragana: Hiragana.NI, shiin: ['n'], boin: 'i'}],
    [Hiragana.NU, {hiragana: Hiragana.NU, shiin: ['n'], boin: 'u'}],
    [Hiragana.NE, {hiragana: Hiragana.NE, shiin: ['n'], boin: 'e'}],
    [Hiragana.NO, {hiragana: Hiragana.NO, shiin: ['n'], boin: 'o'}],

    // は行
    [Hiragana.HA, {hiragana: Hiragana.HA, shiin: ['h'], boin: 'a'}],
    [Hiragana.HI, {hiragana: Hiragana.HI, shiin: ['h'], boin: 'i'}],
    [Hiragana.HU, {hiragana: Hiragana.HU, shiin: ['h'], boin: 'u'}],
    [Hiragana.HE, {hiragana: Hiragana.HE, shiin: ['h'], boin: 'e'}],
    [Hiragana.HO, {hiragana: Hiragana.HO, shiin: ['h'], boin: 'o'}],
    
    // ま行
    [Hiragana.MA, {hiragana: Hiragana.MA, shiin: ['m'], boin: 'a'}],
    [Hiragana.MI, {hiragana: Hiragana.MI, shiin: ['m'], boin: 'i'}],
    [Hiragana.MU, {hiragana: Hiragana.MU, shiin: ['m'], boin: 'u'}],
    [Hiragana.ME, {hiragana: Hiragana.ME, shiin: ['m'], boin: 'e'}],
    [Hiragana.MO, {hiragana: Hiragana.MO, shiin: ['m'], boin: 'o'}],
    
    // や行
    [Hiragana.YA, {hiragana: Hiragana.YA, shiin: ['y'], boin: 'a'}],
    [Hiragana.YU, {hiragana: Hiragana.YU, shiin: ['y'], boin: 'u'}],
    [Hiragana.YO, {hiragana: Hiragana.YO, shiin: ['y'], boin: 'o'}],

    // ら行
    [Hiragana.RA, {hiragana: Hiragana.RA, shiin: ['r'], boin: 'a'}],
    [Hiragana.RI, {hiragana: Hiragana.RI, shiin: ['r'], boin: 'i'}],
    [Hiragana.RU, {hiragana: Hiragana.RU, shiin: ['r'], boin: 'u'}],
    [Hiragana.RE, {hiragana: Hiragana.RE, shiin: ['r'], boin: 'e'}],
    [Hiragana.RO, {hiragana: Hiragana.RO, shiin: ['r'], boin: 'o'}],

    // わ行
    [Hiragana.WA, {hiragana: Hiragana.WA, shiin: ['w'], boin: 'a'}],
    [Hiragana.WO, {hiragana: Hiragana.WO, shiin: ['w'], boin: 'o'}],    
    [Hiragana.N, {hiragana: Hiragana.N, shiin: ['n', 'x'], boin: 'n'}],
]);
