import { Letter } from "@/types/hiragana/letter";
import { Hiragana } from "../hiragana";
import { gojuons } from "./gojuons";
import { kogakis } from "./kogakis";


export const youons: Map<string, Letter> = new Map<string, Letter>([
    // あ行
    [Hiragana.YE, {hiragana: Hiragana.YE, shiin: ['y'], boin: 'e', origin: gojuons.get(Hiragana.I), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.WI, {hiragana: Hiragana.WI, shiin: ['w'], boin: 'i', origin: gojuons.get(Hiragana.U), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.WE, {hiragana: Hiragana.WE, shiin: ['w'], boin: 'e', origin: gojuons.get(Hiragana.U), youon: kogakis.get(Hiragana.XE)}],

    // きゃ行
    [Hiragana.KYA, {hiragana: Hiragana.KYA, shiin: ['ky'], boin: 'a', origin: gojuons.get(Hiragana.KI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.KYI, {hiragana: Hiragana.KYI, shiin: ['ky'], boin: 'i', origin: gojuons.get(Hiragana.KI), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.KYU, {hiragana: Hiragana.KYU, shiin: ['ky'], boin: 'u', origin: gojuons.get(Hiragana.KI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.KYE, {hiragana: Hiragana.KYE, shiin: ['ky'], boin: 'e', origin: gojuons.get(Hiragana.KI), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.KYO, {hiragana: Hiragana.KYO, shiin: ['ky'], boin: 'o', origin: gojuons.get(Hiragana.KI), youon: kogakis.get(Hiragana.XO)}],

    // ぎゃ行
    [Hiragana.GYA, {hiragana: Hiragana.GYA, shiin: ['gy'], boin: 'a', origin: gojuons.get(Hiragana.GI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.GYI, {hiragana: Hiragana.GYI, shiin: ['gy'], boin: 'i', origin: gojuons.get(Hiragana.GI), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.GYU, {hiragana: Hiragana.GYU, shiin: ['gy'], boin: 'u', origin: gojuons.get(Hiragana.GI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.GYE, {hiragana: Hiragana.GYE, shiin: ['gy'], boin: 'e', origin: gojuons.get(Hiragana.GI), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.GYO, {hiragana: Hiragana.GYO, shiin: ['gy'], boin: 'o', origin: gojuons.get(Hiragana.GI), youon: kogakis.get(Hiragana.XO)}],

    // くぁ行
    [Hiragana.QA, {hiragana: Hiragana.QA, shiin: ['q'], boin: 'a', origin: gojuons.get(Hiragana.KU), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.QI, {hiragana: Hiragana.QI, shiin: ['q'], boin: 'i', origin: gojuons.get(Hiragana.KU), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.QE, {hiragana: Hiragana.QE, shiin: ['q'], boin: 'e', origin: gojuons.get(Hiragana.KU), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.QO, {hiragana: Hiragana.QO, shiin: ['q'], boin: 'o', origin: gojuons.get(Hiragana.KU), youon: kogakis.get(Hiragana.XO)}],

    // しゃ行
    [Hiragana.SHA, {hiragana: Hiragana.SHA, shiin: ['sh'], boin: 'a', origin: gojuons.get(Hiragana.SI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.SYI, {hiragana: Hiragana.SYI, shiin: ['sy'], boin: 'i', origin: gojuons.get(Hiragana.SI), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.SHU, {hiragana: Hiragana.SHU, shiin: ['sh'], boin: 'u', origin: gojuons.get(Hiragana.SI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.SHE, {hiragana: Hiragana.SHE, shiin: ['sh'], boin: 'e', origin: gojuons.get(Hiragana.SI), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.SHO, {hiragana: Hiragana.SHO, shiin: ['sh'], boin: 'o', origin: gojuons.get(Hiragana.SI), youon: kogakis.get(Hiragana.XO)}],

    // じゃ行
    [Hiragana.JA, {hiragana: Hiragana.JA, shiin: ['j', 'jy'], boin: 'a', origin: gojuons.get(Hiragana.ZI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.JYI, {hiragana: Hiragana.JYI, shiin: ['jy'], boin: 'i', origin: gojuons.get(Hiragana.ZI), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.JU, {hiragana: Hiragana.JU, shiin: ['j', 'jy'], boin: 'u', origin: gojuons.get(Hiragana.ZI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.JE, {hiragana: Hiragana.JE, shiin: ['j', 'jy'], boin: 'e', origin: gojuons.get(Hiragana.ZI), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.JO, {hiragana: Hiragana.JO, shiin: ['j', 'jy'], boin: 'o', origin: gojuons.get(Hiragana.ZI), youon: kogakis.get(Hiragana.XO)}],

    // ちゃ行
    [Hiragana.CHA, {hiragana: Hiragana.CHA, shiin: ['ch'], boin: 'a', origin: gojuons.get(Hiragana.TI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.CYI, {hiragana: Hiragana.CYI, shiin: ['ch'], boin: 'i', origin: gojuons.get(Hiragana.TI), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.CHU, {hiragana: Hiragana.CHU, shiin: ['ch'], boin: 'u', origin: gojuons.get(Hiragana.TI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.CHE, {hiragana: Hiragana.CHE, shiin: ['ch'], boin: 'e', origin: gojuons.get(Hiragana.TI), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.CHO, {hiragana: Hiragana.CHO, shiin: ['ch'], boin: 'o', origin: gojuons.get(Hiragana.TI), youon: kogakis.get(Hiragana.XO)}],

    // ぢゃ行
    [Hiragana.DYA, {hiragana: Hiragana.DYA, shiin: ['dy'], boin: 'a', origin: gojuons.get(Hiragana.DI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.DYI, {hiragana: Hiragana.DYI, shiin: ['dy'], boin: 'i', origin: gojuons.get(Hiragana.DI), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.DYU, {hiragana: Hiragana.DYU, shiin: ['dy'], boin: 'u', origin: gojuons.get(Hiragana.DI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.DYE, {hiragana: Hiragana.DYE, shiin: ['dy'], boin: 'e', origin: gojuons.get(Hiragana.DI), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.DYO, {hiragana: Hiragana.DYO, shiin: ['dy'], boin: 'o', origin: gojuons.get(Hiragana.DI), youon: kogakis.get(Hiragana.XO)}],

    // つぁ行
    [Hiragana.TSA, {hiragana: Hiragana.TSA, shiin: ['ts'], boin: 'a', origin: gojuons.get(Hiragana.TU), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.TSI, {hiragana: Hiragana.TSI, shiin: ['ts'], boin: 'i', origin: gojuons.get(Hiragana.TU), youon: kogakis.get(Hiragana.XI)}],
    [Hiragana.TSE, {hiragana: Hiragana.TSE, shiin: ['ts'], boin: 'e', origin: gojuons.get(Hiragana.TU), youon: kogakis.get(Hiragana.XE)}],
    [Hiragana.TSO, {hiragana: Hiragana.TSO, shiin: ['ts'], boin: 'o', origin: gojuons.get(Hiragana.TU), youon: kogakis.get(Hiragana.XO)}],

    // にゃ行
    [Hiragana.NYA, {hiragana: Hiragana.KYA, shiin: ['ny'], boin: 'a', origin: gojuons.get(Hiragana.NI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.NYI, {hiragana: Hiragana.KYA, shiin: ['ny'], boin: 'i', origin: gojuons.get(Hiragana.NI), youon: kogakis.get(Hiragana.XI)}],    
    [Hiragana.NYU, {hiragana: Hiragana.KYU, shiin: ['ny'], boin: 'u', origin: gojuons.get(Hiragana.NI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.NYE, {hiragana: Hiragana.KYA, shiin: ['ny'], boin: 'e', origin: gojuons.get(Hiragana.NI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.NYO, {hiragana: Hiragana.KYO, shiin: ['ny'], boin: 'o', origin: gojuons.get(Hiragana.NI), youon: kogakis.get(Hiragana.XO)}],

    // ひゃ行
    [Hiragana.HYA, {hiragana: Hiragana.KYA, shiin: ['hy'], boin: 'a', origin: gojuons.get(Hiragana.HI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.HYI, {hiragana: Hiragana.KYA, shiin: ['hy'], boin: 'i', origin: gojuons.get(Hiragana.HI), youon: kogakis.get(Hiragana.XI)}],    
    [Hiragana.HYU, {hiragana: Hiragana.KYU, shiin: ['hy'], boin: 'u', origin: gojuons.get(Hiragana.HI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.HYE, {hiragana: Hiragana.KYA, shiin: ['hy'], boin: 'e', origin: gojuons.get(Hiragana.HI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.HYO, {hiragana: Hiragana.KYO, shiin: ['hy'], boin: 'o', origin: gojuons.get(Hiragana.HI), youon: kogakis.get(Hiragana.XO)}],

    // びゃ行
    [Hiragana.BYA, {hiragana: Hiragana.BYA, shiin: ['by'], boin: 'a', origin: gojuons.get(Hiragana.BI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.BYI, {hiragana: Hiragana.BYA, shiin: ['by'], boin: 'i', origin: gojuons.get(Hiragana.BI), youon: kogakis.get(Hiragana.XI)}],    
    [Hiragana.BYU, {hiragana: Hiragana.BYU, shiin: ['by'], boin: 'u', origin: gojuons.get(Hiragana.BI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.BYE, {hiragana: Hiragana.BYA, shiin: ['by'], boin: 'e', origin: gojuons.get(Hiragana.BI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.BYO, {hiragana: Hiragana.BYO, shiin: ['by'], boin: 'o', origin: gojuons.get(Hiragana.BI), youon: kogakis.get(Hiragana.XO)}],

    // ぴゃ行
    [Hiragana.PYA, {hiragana: Hiragana.PYA, shiin: ['py'], boin: 'a', origin: gojuons.get(Hiragana.PI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.PYI, {hiragana: Hiragana.PYA, shiin: ['py'], boin: 'i', origin: gojuons.get(Hiragana.PI), youon: kogakis.get(Hiragana.XI)}],    
    [Hiragana.PYU, {hiragana: Hiragana.PYU, shiin: ['py'], boin: 'u', origin: gojuons.get(Hiragana.PI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.PYE, {hiragana: Hiragana.PYA, shiin: ['py'], boin: 'e', origin: gojuons.get(Hiragana.PI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.PYO, {hiragana: Hiragana.PYO, shiin: ['py'], boin: 'o', origin: gojuons.get(Hiragana.PI), youon: kogakis.get(Hiragana.XO)}],

    // ふぁ行
    [Hiragana.FA, {hiragana: Hiragana.FA, shiin: ['f'], boin: 'a', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.FI, {hiragana: Hiragana.FA, shiin: ['f', 'fy'], boin: 'i', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XA)}],    
    [Hiragana.FE, {hiragana: Hiragana.FA, shiin: ['f', 'fy'], boin: 'e', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.FO, {hiragana: Hiragana.FO, shiin: ['f'], boin: 'o', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XO)}],

    // ふゃ行
    [Hiragana.FYA, {hiragana: Hiragana.FYA, shiin: ['fy'], boin: 'a', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.FYU, {hiragana: Hiragana.FYU, shiin: ['fy'], boin: 'u', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.FYO, {hiragana: Hiragana.FYO, shiin: ['fy'], boin: 'o', origin: gojuons.get(Hiragana.HU), youon: kogakis.get(Hiragana.XO)}],

    // みゃ行
    [Hiragana.MYA, {hiragana: Hiragana.MYA, shiin: ['my'], boin: 'a', origin: gojuons.get(Hiragana.MI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.MYI, {hiragana: Hiragana.MYA, shiin: ['my'], boin: 'i', origin: gojuons.get(Hiragana.MI), youon: kogakis.get(Hiragana.XI)}],    
    [Hiragana.MYU, {hiragana: Hiragana.MYU, shiin: ['my'], boin: 'u', origin: gojuons.get(Hiragana.MI), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.MYE, {hiragana: Hiragana.MYA, shiin: ['my'], boin: 'e', origin: gojuons.get(Hiragana.MI), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.MYO, {hiragana: Hiragana.MYO, shiin: ['my'], boin: 'o', origin: gojuons.get(Hiragana.MI), youon: kogakis.get(Hiragana.XO)}],

    // りゃ行
    [Hiragana.RYA, {hiragana: Hiragana.RYA, shiin: ['ry'], boin: 'a', origin: gojuons.get(Hiragana.RA), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.RYI, {hiragana: Hiragana.RYA, shiin: ['ry'], boin: 'i', origin: gojuons.get(Hiragana.RA), youon: kogakis.get(Hiragana.XI)}],    
    [Hiragana.RYU, {hiragana: Hiragana.RYU, shiin: ['ry'], boin: 'u', origin: gojuons.get(Hiragana.RA), youon: kogakis.get(Hiragana.XU)}],
    [Hiragana.RYE, {hiragana: Hiragana.RYA, shiin: ['ry'], boin: 'e', origin: gojuons.get(Hiragana.RA), youon: kogakis.get(Hiragana.XA)}],
    [Hiragana.RYO, {hiragana: Hiragana.RYO, shiin: ['ry'], boin: 'o', origin: gojuons.get(Hiragana.RA), youon: kogakis.get(Hiragana.XO)}],
]);
