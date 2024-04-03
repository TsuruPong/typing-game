export const KeyKind = {
    Standard: "standard",
    Half: "half-large",
    Middle: "middle-large",
    Large: "large",
    Space: "space"
} as const;

export type KeyKindType = typeof KeyKind[keyof typeof KeyKind];