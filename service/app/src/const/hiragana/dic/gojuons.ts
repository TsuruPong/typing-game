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
    [Hiragana.KA, {hiragana: Hiragana.KA, shiins: ['k', 'c'], boin: 'a'}],
    [Hiragana.KI, {hiragana: Hiragana.KI, shiins: ['k'], boin: 'i'}],
    [Hiragana.KU, {hiragana: Hiragana.KU, shiins: ['k', 'c'], boin: 'u'}],
    [Hiragana.KE, {hiragana: Hiragana.KE, shiins: ['k'], boin: 'e'}],
    [Hiragana.KO, {hiragana: Hiragana.KO, shiins: ['k', 'c'], boin: 'o'}],

    // さ行
    [Hiragana.SA, {hiragana: Hiragana.SA, shiins: ['s'], boin: 'a'}],
    [Hiragana.SI, {hiragana: Hiragana.SI, shiins: ['s', 'sh', 'c'], boin: 'i'}],
    [Hiragana.SU, {hiragana: Hiragana.SU, shiins: ['s'], boin: 'u'}],
    [Hiragana.SE, {hiragana: Hiragana.SE, shiins: ['s', 'c'], boin: 'e'}],
    [Hiragana.SO, {hiragana: Hiragana.SO, shiins: ['s'], boin: 'o'}],

    // た行
    [Hiragana.TA, {hiragana: Hiragana.TA, shiins: ['t'], boin: 'a'}],
    [Hiragana.TI, {hiragana: Hiragana.TI, shiins: ['t', 'ch'], boin: 'i'}],
    [Hiragana.TU, {hiragana: Hiragana.TU, shiins: ['t', 'tsu'], boin: 'u'}],
    [Hiragana.TE, {hiragana: Hiragana.TE, shiins: ['t'], boin: 'e'}],
    [Hiragana.TO, {hiragana: Hiragana.TO, shiins: ['t'], boin: 'o'}],
    
    // な行
    [Hiragana.NA, {hiragana: Hiragana.NA, shiins: ['n'], boin: 'a'}],
    [Hiragana.NI, {hiragana: Hiragana.NI, shiins: ['n'], boin: 'i'}],
    [Hiragana.NU, {hiragana: Hiragana.NU, shiins: ['n'], boin: 'u'}],
    [Hiragana.NE, {hiragana: Hiragana.NE, shiins: ['n'], boin: 'e'}],
    [Hiragana.NO, {hiragana: Hiragana.NO, shiins: ['n'], boin: 'o'}],

    // は行
    [Hiragana.HA, {hiragana: Hiragana.HA, shiins: ['h'], boin: 'a'}],
    [Hiragana.HI, {hiragana: Hiragana.HI, shiins: ['h'], boin: 'i'}],
    [Hiragana.HU, {hiragana: Hiragana.HU, shiins: ['h'], boin: 'u'}],
    [Hiragana.HE, {hiragana: Hiragana.HE, shiins: ['h'], boin: 'e'}],
    [Hiragana.HO, {hiragana: Hiragana.HO, shiins: ['h'], boin: 'o'}],
    
    // ま行
    [Hiragana.MA, {hiragana: Hiragana.MA, shiins: ['m'], boin: 'a'}],
    [Hiragana.MI, {hiragana: Hiragana.MI, shiins: ['m'], boin: 'i'}],
    [Hiragana.MU, {hiragana: Hiragana.MU, shiins: ['m'], boin: 'u'}],
    [Hiragana.ME, {hiragana: Hiragana.ME, shiins: ['m'], boin: 'e'}],
    [Hiragana.MO, {hiragana: Hiragana.MO, shiins: ['m'], boin: 'o'}],
    
    // や行
    [Hiragana.YA, {hiragana: Hiragana.YA, shiins: ['y'], boin: 'a'}],
    [Hiragana.YU, {hiragana: Hiragana.YU, shiins: ['y'], boin: 'u'}],
    [Hiragana.YO, {hiragana: Hiragana.YO, shiins: ['y'], boin: 'o'}],

    // ら行
    [Hiragana.RA, {hiragana: Hiragana.RA, shiins: ['r'], boin: 'a'}],
    [Hiragana.RI, {hiragana: Hiragana.RI, shiins: ['r'], boin: 'i'}],
    [Hiragana.RU, {hiragana: Hiragana.RU, shiins: ['r'], boin: 'u'}],
    [Hiragana.RE, {hiragana: Hiragana.RE, shiins: ['r'], boin: 'e'}],
    [Hiragana.RO, {hiragana: Hiragana.RO, shiins: ['r'], boin: 'o'}],

    // わ行
    [Hiragana.WA, {hiragana: Hiragana.WA, shiins: ['w'], boin: 'a'}],
    [Hiragana.WO, {hiragana: Hiragana.WO, shiins: ['w'], boin: 'o'}],    
    [Hiragana.N, {hiragana: Hiragana.N, shiins: ['n', 'x'], boin: 'n'}],
]);
