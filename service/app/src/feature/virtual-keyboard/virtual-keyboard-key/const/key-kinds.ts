export const KeyKind = {
    TINY: "tiny",
    SMALL: "small",
    MEDIUM: "medium",
    HALFLARGE: "half-large",
    LARGE: "large",
    SPACE: "space"
} as const;

export type KeyKindType = typeof KeyKind[keyof typeof KeyKind];