import { KeyKind } from "./kinds";

export const KeyConfig: KeyConfigType[][] = [
    [
        {symbol: "Esc", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "1", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "2", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "3", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "4", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "5", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "6", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "7", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "8", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "9", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "10", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "11", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "12", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "BS", kind: KeyKind.HALFLARGE, isSymbolDisplay: false},
    ],
    [
        {symbol: "Tab", kind: KeyKind.MEDIUM, isSymbolDisplay: false},
        {symbol: "Q", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "W", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "E", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "R", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "T", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "Y", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "U", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "I", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "O", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "P", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "square_brackets", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "closing_square_brackets", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "backslash", kind: KeyKind.MEDIUM, isSymbolDisplay: false},
    ],
    [
        {symbol: "Caps", kind: KeyKind.HALFLARGE, isSymbolDisplay: false},
        {symbol: "A", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "S", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "D", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "F", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "G", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "H", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "J", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "K", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "L", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "collon", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "quote", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "return", kind: KeyKind.HALFLARGE, isSymbolDisplay: false}
    ],
    [
        {symbol: "left_shift", kind: KeyKind.LARGE, isSymbolDisplay: false},
        {symbol: "Z", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "X", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "C", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "V", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "B", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "N", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "M", kind: KeyKind.TINY, isSymbolDisplay: true},
        {symbol: "comma", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "dot", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "slash", kind: KeyKind.TINY, isSymbolDisplay: false},
        {symbol: "right_shift", kind: KeyKind.LARGE, isSymbolDisplay: false}
    ],
    [
        {symbol: "left_controll", kind: KeyKind.SMALL, isSymbolDisplay: false},
        {symbol: "left_win", kind: KeyKind.SMALL, isSymbolDisplay: false},
        {symbol: "left_alt", kind: KeyKind.SMALL, isSymbolDisplay: false},
        {symbol: "space", kind: KeyKind.SPACE, isSymbolDisplay: false},
        {symbol: "right_alt", kind: KeyKind.SMALL, isSymbolDisplay: false},
        {symbol: "right_win", kind: KeyKind.SMALL, isSymbolDisplay: false},
        {symbol: "menu", kind: KeyKind.SMALL, isSymbolDisplay: false},
        {symbol: "right_controll", kind: KeyKind.SMALL, isSymbolDisplay: false}
    ]
];

export type KeyConfigType = {
    symbol: string,
    kind: string,
    isSymbolDisplay: boolean
};