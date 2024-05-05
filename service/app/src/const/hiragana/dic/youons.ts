import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";
import { gojuons } from "./gojuons";
import { kogakis } from "./kogakis";


export const youons: Map<string, Letter> = new Map<string, Letter>([
    // あ行
    [Hiragana.YE, {hiragana: Hiragana.YE, shiins: ['y'], boin: 'e', origin: gojuons.get(Hiragana.I), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.WI, {hiragana: Hiragana.WI, shiins: ['w'], boin: 'i', origin: gojuons.get(Hiragana.U), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.WE, {hiragana: Hiragana.WE, shiins: ['w'], boin: 'e', origin: gojuons.get(Hiragana.U), kogaki: kogakis.get(Hiragana.XE)}],

    // きゃ行
    [Hiragana.KYA, {hiragana: Hiragana.KYA, shiins: ['ky'], boin: 'a', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.KYI, {hiragana: Hiragana.KYI, shiins: ['ky'], boin: 'i', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.KYU, {hiragana: Hiragana.KYU, shiins: ['ky'], boin: 'u', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.KYE, {hiragana: Hiragana.KYE, shiins: ['ky'], boin: 'e', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.KYO, {hiragana: Hiragana.KYO, shiins: ['ky'], boin: 'o', origin: gojuons.get(Hiragana.KI), kogaki: kogakis.get(Hiragana.XYO)}],

    // ぎゃ行
    [Hiragana.GYA, {hiragana: Hiragana.GYA, shiins: ['gy'], boin: 'a', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.GYI, {hiragana: Hiragana.GYI, shiins: ['gy'], boin: 'i', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.GYU, {hiragana: Hiragana.GYU, shiins: ['gy'], boin: 'u', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.GYE, {hiragana: Hiragana.GYE, shiins: ['gy'], boin: 'e', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.GYO, {hiragana: Hiragana.GYO, shiins: ['gy'], boin: 'o', origin: gojuons.get(Hiragana.GI), kogaki: kogakis.get(Hiragana.XYO)}],

    // くぁ行
    [Hiragana.QA, {hiragana: Hiragana.QA, shiins: ['q'], boin: 'a', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XA)}],
    [Hiragana.QI, {hiragana: Hiragana.QI, shiins: ['q'], boin: 'i', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.QE, {hiragana: Hiragana.QE, shiins: ['q'], boin: 'e', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.QO, {hiragana: Hiragana.QO, shiins: ['q'], boin: 'o', origin: gojuons.get(Hiragana.KU), kogaki: kogakis.get(Hiragana.XO)}],

    // しゃ行
    [Hiragana.SHA, {hiragana: Hiragana.SHA, shiins: ['sh'], boin: 'a', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.SYI, {hiragana: Hiragana.SYI, shiins: ['sy'], boin: 'i', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.SHU, {hiragana: Hiragana.SHU, shiins: ['sh'], boin: 'u', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.SHE, {hiragana: Hiragana.SHE, shiins: ['sh'], boin: 'e', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.SHO, {hiragana: Hiragana.SHO, shiins: ['sh'], boin: 'o', origin: gojuons.get(Hiragana.SI), kogaki: kogakis.get(Hiragana.XYO)}],

    // じゃ行
    [Hiragana.JA, {hiragana: Hiragana.JA, shiins: ['j', 'jy'], boin: 'a', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.JYI, {hiragana: Hiragana.JYI, shiins: ['jy'], boin: 'i', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.JU, {hiragana: Hiragana.JU, shiins: ['j', 'jy'], boin: 'u', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.JE, {hiragana: Hiragana.JE, shiins: ['j', 'jy'], boin: 'e', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.JO, {hiragana: Hiragana.JO, shiins: ['j', 'jy'], boin: 'o', origin: gojuons.get(Hiragana.ZI), kogaki: kogakis.get(Hiragana.XYO)}],

    // ちゃ行
    [Hiragana.CHA, {hiragana: Hiragana.CHA, shiins: ['ch'], boin: 'a', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.CYI, {hiragana: Hiragana.CYI, shiins: ['ch'], boin: 'i', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.CHU, {hiragana: Hiragana.CHU, shiins: ['ch'], boin: 'u', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.CHE, {hiragana: Hiragana.CHE, shiins: ['ch'], boin: 'e', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.CHO, {hiragana: Hiragana.CHO, shiins: ['ch'], boin: 'o', origin: gojuons.get(Hiragana.TI), kogaki: kogakis.get(Hiragana.XYO)}],

    // ぢゃ行
    [Hiragana.DYA, {hiragana: Hiragana.DYA, shiins: ['dy'], boin: 'a', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.DYI, {hiragana: Hiragana.DYI, shiins: ['dy'], boin: 'i', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.DYU, {hiragana: Hiragana.DYU, shiins: ['dy'], boin: 'u', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.DYE, {hiragana: Hiragana.DYE, shiins: ['dy'], boin: 'e', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.DYO, {hiragana: Hiragana.DYO, shiins: ['dy'], boin: 'o', origin: gojuons.get(Hiragana.DI), kogaki: kogakis.get(Hiragana.XYO)}],

    // つぁ行
    [Hiragana.TSA, {hiragana: Hiragana.TSA, shiins: ['ts'], boin: 'a', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XA)}],
    [Hiragana.TSI, {hiragana: Hiragana.TSI, shiins: ['ts'], boin: 'i', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XI)}],
    [Hiragana.TSE, {hiragana: Hiragana.TSE, shiins: ['ts'], boin: 'e', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.TSO, {hiragana: Hiragana.TSO, shiins: ['ts'], boin: 'o', origin: gojuons.get(Hiragana.TU), kogaki: kogakis.get(Hiragana.XO)}],

    // にゃ行
    [Hiragana.NYA, {hiragana: Hiragana.KYA, shiins: ['ny'], boin: 'a', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.NYI, {hiragana: Hiragana.KYA, shiins: ['ny'], boin: 'i', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.NYU, {hiragana: Hiragana.KYU, shiins: ['ny'], boin: 'u', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.NYE, {hiragana: Hiragana.KYA, shiins: ['ny'], boin: 'e', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.NYO, {hiragana: Hiragana.KYO, shiins: ['ny'], boin: 'o', origin: gojuons.get(Hiragana.NI), kogaki: kogakis.get(Hiragana.XYO)}],

    // ひゃ行
    [Hiragana.HYA, {hiragana: Hiragana.KYA, shiins: ['hy'], boin: 'a', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.HYI, {hiragana: Hiragana.KYA, shiins: ['hy'], boin: 'i', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.HYU, {hiragana: Hiragana.KYU, shiins: ['hy'], boin: 'u', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.HYE, {hiragana: Hiragana.KYA, shiins: ['hy'], boin: 'e', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.HYO, {hiragana: Hiragana.KYO, shiins: ['hy'], boin: 'o', origin: gojuons.get(Hiragana.HI), kogaki: kogakis.get(Hiragana.XYO)}],

    // びゃ行
    [Hiragana.BYA, {hiragana: Hiragana.BYA, shiins: ['by'], boin: 'a', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.BYI, {hiragana: Hiragana.BYA, shiins: ['by'], boin: 'i', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.BYU, {hiragana: Hiragana.BYU, shiins: ['by'], boin: 'u', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.BYE, {hiragana: Hiragana.BYA, shiins: ['by'], boin: 'e', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.BYO, {hiragana: Hiragana.BYO, shiins: ['by'], boin: 'o', origin: gojuons.get(Hiragana.BI), kogaki: kogakis.get(Hiragana.XYO)}],

    // ぴゃ行
    [Hiragana.PYA, {hiragana: Hiragana.PYA, shiins: ['py'], boin: 'a', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.PYI, {hiragana: Hiragana.PYA, shiins: ['py'], boin: 'i', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.PYU, {hiragana: Hiragana.PYU, shiins: ['py'], boin: 'u', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.PYE, {hiragana: Hiragana.PYA, shiins: ['py'], boin: 'e', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.PYO, {hiragana: Hiragana.PYO, shiins: ['py'], boin: 'o', origin: gojuons.get(Hiragana.PI), kogaki: kogakis.get(Hiragana.XYO)}],

    // ふぁ行
    [Hiragana.FA, {hiragana: Hiragana.FA, shiins: ['f'], boin: 'a', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XA)}],
    [Hiragana.FI, {hiragana: Hiragana.FA, shiins: ['f', 'fy'], boin: 'i', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.FE, {hiragana: Hiragana.FA, shiins: ['f', 'fy'], boin: 'e', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.FO, {hiragana: Hiragana.FO, shiins: ['f'], boin: 'o', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XO)}],

    // ふゃ行
    [Hiragana.FYA, {hiragana: Hiragana.FYA, shiins: ['fy'], boin: 'a', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.FYU, {hiragana: Hiragana.FYU, shiins: ['fy'], boin: 'u', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.FYO, {hiragana: Hiragana.FYO, shiins: ['fy'], boin: 'o', origin: gojuons.get(Hiragana.HU), kogaki: kogakis.get(Hiragana.XYO)}],

    // みゃ行
    [Hiragana.MYA, {hiragana: Hiragana.MYA, shiins: ['my'], boin: 'a', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.MYI, {hiragana: Hiragana.MYA, shiins: ['my'], boin: 'i', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.MYU, {hiragana: Hiragana.MYU, shiins: ['my'], boin: 'u', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.MYE, {hiragana: Hiragana.MYA, shiins: ['my'], boin: 'e', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.MYO, {hiragana: Hiragana.MYO, shiins: ['my'], boin: 'o', origin: gojuons.get(Hiragana.MI), kogaki: kogakis.get(Hiragana.XYO)}],

    // りゃ行
    [Hiragana.RYA, {hiragana: Hiragana.RYA, shiins: ['ry'], boin: 'a', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XYA)}],
    [Hiragana.RYI, {hiragana: Hiragana.RYA, shiins: ['ry'], boin: 'i', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XI)}],    
    [Hiragana.RYU, {hiragana: Hiragana.RYU, shiins: ['ry'], boin: 'u', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XYU)}],
    [Hiragana.RYE, {hiragana: Hiragana.RYA, shiins: ['ry'], boin: 'e', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XE)}],
    [Hiragana.RYO, {hiragana: Hiragana.RYO, shiins: ['ry'], boin: 'o', origin: gojuons.get(Hiragana.RA), kogaki: kogakis.get(Hiragana.XYO)}],
]);
