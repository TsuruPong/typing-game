import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "./hiragana";

export const gojuons: Map<string, Letter> = new Map<string, Letter>([
    // あ行
    [Hiragana.A, { shiins: [], boin: 'a' }],
    [Hiragana.I, { shiins: [], boin: 'i' }],
    [Hiragana.U, { shiins: [], boin: 'u' }],
    [Hiragana.E, { shiins: [], boin: 'e' }],
    [Hiragana.O, { shiins: [], boin: 'o' }],

    // か行
    [Hiragana.KA, { shiins: ['k', 'c'], boin: 'a' }],
    [Hiragana.KI, { shiins: ['k'], boin: 'i' }],
    [Hiragana.KU, { shiins: ['k', 'c'], boin: 'u' }],
    [Hiragana.KE, { shiins: ['k'], boin: 'e' }],
    [Hiragana.KO, { shiins: ['k', 'c'], boin: 'o' }],

    // さ行
    [Hiragana.SA, { shiins: ['s'], boin: 'a' }],
    [Hiragana.SI, { shiins: ['s', 'sh', 'c'], boin: 'i' }],
    [Hiragana.SU, { shiins: ['s'], boin: 'u' }],
    [Hiragana.SE, { shiins: ['s', 'c'], boin: 'e' }],
    [Hiragana.SO, { shiins: ['s'], boin: 'o' }],

    // た行
    [Hiragana.TA, { shiins: ['t'], boin: 'a' }],
    [Hiragana.TI, { shiins: ['t', 'ch'], boin: 'i' }],
    [Hiragana.TU, { shiins: ['t', 'tsu'], boin: 'u' }],
    [Hiragana.TE, { shiins: ['t'], boin: 'e' }],
    [Hiragana.TO, { shiins: ['t'], boin: 'o' }],
    
    // な行
    [Hiragana.NA, { shiins: ['n'], boin: 'a' }],
    [Hiragana.NI, { shiins: ['n'], boin: 'i' }],
    [Hiragana.NU, { shiins: ['n'], boin: 'u' }],
    [Hiragana.NE, { shiins: ['n'], boin: 'e' }],
    [Hiragana.NO, { shiins: ['n'], boin: 'o' }],

    // は行
    [Hiragana.HA, { shiins: ['h'], boin: 'a' }],
    [Hiragana.HI, { shiins: ['h'], boin: 'i' }],
    [Hiragana.HU, { shiins: ['h'], boin: 'u' }],
    [Hiragana.HE, { shiins: ['h'], boin: 'e' }],
    [Hiragana.HO, { shiins: ['h'], boin: 'o' }],
    
    // ま行
    [Hiragana.MA, { shiins: ['m'], boin: 'a' }],
    [Hiragana.MI, { shiins: ['m'], boin: 'i' }],
    [Hiragana.MU, { shiins: ['m'], boin: 'u' }],
    [Hiragana.ME, { shiins: ['m'], boin: 'e' }],
    [Hiragana.MO, { shiins: ['m'], boin: 'o' }],
    
    // や行
    [Hiragana.YA, { shiins: ['y'], boin: 'a' }],
    [Hiragana.YU, { shiins: ['y'], boin: 'u' }],
    [Hiragana.YO, { shiins: ['y'], boin: 'o' }],

    // ら行
    [Hiragana.RA, { shiins: ['r'], boin: 'a' }],
    [Hiragana.RI, { shiins: ['r'], boin: 'i' }],
    [Hiragana.RU, { shiins: ['r'], boin: 'u' }],
    [Hiragana.RE, { shiins: ['r'], boin: 'e' }],
    [Hiragana.RO, { shiins: ['r'], boin: 'o' }],

    // わ行
    [Hiragana.WA, { shiins: ['w'], boin: 'a' }],
    [Hiragana.WO, { shiins: ['w'], boin: 'o' }],    
    [Hiragana.N, { shiins: ['n', 'x'], boin: 'n' }],
]);

export const dakuons: Map<string, Letter> = new Map<string, Letter> ([
    // が行
    [Hiragana.GA, { shiins: ['g'], boin: 'a' }],
    [Hiragana.GI, { shiins: ['g'], boin: 'i' }],
    [Hiragana.GU, { shiins: ['g'], boin: 'u' }],
    [Hiragana.GE, { shiins: ['g'], boin: 'e' }],
    [Hiragana.GO, { shiins: ['g'], boin: 'o' }],

    // ざ行
    [Hiragana.ZA, { shiins: ['z'], boin: 'a' }],
    [Hiragana.ZI, { shiins: ['z'], boin: 'i' }],
    [Hiragana.ZU, { shiins: ['z'], boin: 'u' }],
    [Hiragana.ZE, { shiins: ['z'], boin: 'e' }],
    [Hiragana.ZO, { shiins: ['z'], boin: 'o' }],

    // だ行
    [Hiragana.DA, { shiins: ['d'], boin: 'a' }],
    [Hiragana.DI, { shiins: ['d'], boin: 'i' }],
    [Hiragana.DU, { shiins: ['d'], boin: 'u' }],
    [Hiragana.DE, { shiins: ['d'], boin: 'e' }],
    [Hiragana.DO, { shiins: ['d'], boin: 'o' }],

    // ば行
    [Hiragana.BA, { shiins: ['b'], boin: 'a' }],
    [Hiragana.BI, { shiins: ['b'], boin: 'i' }],
    [Hiragana.BU, { shiins: ['b'], boin: 'u' }],
    [Hiragana.BE, { shiins: ['b'], boin: 'e' }],
    [Hiragana.BO, { shiins: ['b'], boin: 'o' }],

    // ヴぁ行
    [Hiragana.VA, { shiins: ['v'], boin: 'a' }],
    [Hiragana.VI, { shiins: ['v'], boin: 'i' }],
    [Hiragana.VU, { shiins: ['v'], boin: 'u' }],
    [Hiragana.VE, { shiins: ['v'], boin: 'e' }],
    [Hiragana.VO, { shiins: ['v'], boin: 'o' }],
]);

export const handakuons: Map<string, Letter> = new Map<string, Letter> ([
    // ぱ行
    [Hiragana.PA, { shiins: ['p'], boin: 'a' }],
    [Hiragana.PI, { shiins: ['p'], boin: 'i' }],
    [Hiragana.PU, { shiins: ['p'], boin: 'u' }],
    [Hiragana.PE, { shiins: ['p'], boin: 'e' }],
    [Hiragana.PO, { shiins: ['p'], boin: 'o' }],
]);

export const kogakis: Map<string, Letter> = new Map<string, Letter>([
    // ぁ行
    [Hiragana.XA, { shiins: ['x', 'l'], boin: 'a' }],
    [Hiragana.XI, { shiins: ['x', 'l'], boin: 'i' }],
    [Hiragana.XI, { shiins: ['x', 'l'], boin: 'u' }],
    [Hiragana.XE, { shiins: ['x', 'l'], boin: 'e' }],
    [Hiragana.XO, { shiins: ['x', 'l'], boin: 'o' }],

    // っ
    [Hiragana.XTU, { shiins: ['xt', 'lt', 'xts', 'lts'], boin: 'u' }],

    // ゃ行
    [Hiragana.XYA, { shiins: ['xy', 'ly'], boin: 'a' }],
    [Hiragana.XYU, { shiins: ['xy', 'ly'], boin: 'u' }],
    [Hiragana.XYO, { shiins: ['xy', 'ly'], boin: 'o' }],
]);

export const youons: Map<string, Letter> = new Map<string, Letter>([
    // あ行
    [Hiragana.YE, { shiins: ['y'], boin: 'e', origin: gojuons.get(Hiragana.I), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.WI, { shiins: ['w'], boin: 'i', origin: gojuons.get(Hiragana.U), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.WE, { shiins: ['w'], boin: 'e', origin: gojuons.get(Hiragana.U), kogaki: kogakis.get(Hiragana.XE) }],

    // きゃ行
    [Hiragana.KYA, { shiins: ['ky'], boin: 'a', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.KYI, { shiins: ['ky'], boin: 'i', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.KYU, { shiins: ['ky'], boin: 'u', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.KYE, { shiins: ['ky'], boin: 'e', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.KYO, { shiins: ['ky'], boin: 'o', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XYO) }],

    // ぎゃ行
    [Hiragana.GYA, { shiins: ['gy'], boin: 'a', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.GYI, { shiins: ['gy'], boin: 'i', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.GYU, { shiins: ['gy'], boin: 'u', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.GYE, { shiins: ['gy'], boin: 'e', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.GYO, { shiins: ['gy'], boin: 'o', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XYO) }],

    // くぁ行
    [Hiragana.QA, { shiins: ['q'], boin: 'a', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XA) }],
    [Hiragana.QI, { shiins: ['q'], boin: 'i', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.QE, { shiins: ['q'], boin: 'e', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.QO, { shiins: ['q'], boin: 'o', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XO) }],

    // しゃ行
    [Hiragana.SHA, { shiins: ['sh'], boin: 'a', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.SYI, { shiins: ['sy'], boin: 'i', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.SHU, { shiins: ['sh'], boin: 'u', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.SHE, { shiins: ['sh'], boin: 'e', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.SHO, { shiins: ['sh'], boin: 'o', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XYO) }],

    // じゃ行
    [Hiragana.JA, { shiins: ['j', 'jy'], boin: 'a', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.JYI, { shiins: ['jy'], boin: 'i', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.JU, { shiins: ['j', 'jy'], boin: 'u', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.JE, { shiins: ['j', 'jy'], boin: 'e', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.JO, { shiins: ['j', 'jy'], boin: 'o', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XYO) }],

    // ちゃ行
    [Hiragana.CHA, { shiins: ['ch'], boin: 'a', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.CYI, { shiins: ['ch'], boin: 'i', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.CHU, { shiins: ['ch'], boin: 'u', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.CHE, { shiins: ['ch'], boin: 'e', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.CHO, { shiins: ['ch'], boin: 'o', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XYO) }],

    // ぢゃ行
    [Hiragana.DYA, { shiins: ['dy'], boin: 'a', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.DYI, { shiins: ['dy'], boin: 'i', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.DYU, { shiins: ['dy'], boin: 'u', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.DYE, { shiins: ['dy'], boin: 'e', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.DYO, { shiins: ['dy'], boin: 'o', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XYO) }],

    // つぁ行
    [Hiragana.TSA, { shiins: ['ts'], boin: 'a', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XA) }],
    [Hiragana.TSI, { shiins: ['ts'], boin: 'i', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XI) }],
    [Hiragana.TSE, { shiins: ['ts'], boin: 'e', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.TSO, { shiins: ['ts'], boin: 'o', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XO) }],

    // にゃ行
    [Hiragana.NYA, { shiins: ['ny'], boin: 'a', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.NYI, { shiins: ['ny'], boin: 'i', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.NYU, { shiins: ['ny'], boin: 'u', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.NYE, { shiins: ['ny'], boin: 'e', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.NYO, { shiins: ['ny'], boin: 'o', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XYO) }],

    // ひゃ行
    [Hiragana.HYA, { shiins: ['hy'], boin: 'a', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.HYI, { shiins: ['hy'], boin: 'i', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.HYU, { shiins: ['hy'], boin: 'u', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.HYE, { shiins: ['hy'], boin: 'e', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.HYO, { shiins: ['hy'], boin: 'o', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XYO) }],

    // びゃ行
    [Hiragana.BYA, { shiins: ['by'], boin: 'a', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.BYI, { shiins: ['by'], boin: 'i', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.BYU, { shiins: ['by'], boin: 'u', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.BYE, { shiins: ['by'], boin: 'e', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.BYO, { shiins: ['by'], boin: 'o', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XYO) }],

    // ぴゃ行
    [Hiragana.PYA, { shiins: ['py'], boin: 'a', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.PYI, { shiins: ['py'], boin: 'i', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.PYU, { shiins: ['py'], boin: 'u', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.PYE, { shiins: ['py'], boin: 'e', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.PYO, { shiins: ['py'], boin: 'o', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XYO) }],

    // ふぁ行
    [Hiragana.FA, { shiins: ['f'], boin: 'a', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XA) }],
    [Hiragana.FI, { shiins: ['f', 'fy'], boin: 'i', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.FE, { shiins: ['f', 'fy'], boin: 'e', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.FO, { shiins: ['f'], boin: 'o', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XO) }],

    // ふゃ行
    [Hiragana.FYA, { shiins: ['fy'], boin: 'a', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.FYU, { shiins: ['fy'], boin: 'u', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.FYO, { shiins: ['fy'], boin: 'o', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XYO) }],

    // みゃ行
    [Hiragana.MYA, { shiins: ['my'], boin: 'a', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.MYI, { shiins: ['my'], boin: 'i', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.MYU, { shiins: ['my'], boin: 'u', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.MYE, { shiins: ['my'], boin: 'e', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.MYO, { shiins: ['my'], boin: 'o', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XYO) }],

    // りゃ行
    [Hiragana.RYA, { shiins: ['ry'], boin: 'a', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XYA) }],
    [Hiragana.RYI, { shiins: ['ry'], boin: 'i', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XI) }],    
    [Hiragana.RYU, { shiins: ['ry'], boin: 'u', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XYU) }],
    [Hiragana.RYE, { shiins: ['ry'], boin: 'e', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XE) }],
    [Hiragana.RYO, { shiins: ['ry'], boin: 'o', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XYO) }],
]);


export const HiraganaDictionary: Map<string, Letter> = new Map<string, Letter>([...gojuons, ...dakuons, ...handakuons, ...kogakis, ...youons]);