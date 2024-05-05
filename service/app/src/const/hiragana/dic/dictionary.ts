import { Letter } from "@/types/hiragana/letter";
import { gojuons } from "./gojuons";
import { dakuons } from "./dakuons";
import { handakuons } from "./handakuons";
import { youons } from "./youons";
import { kogakis } from "./kogakis";

export const HiraganaDictionary: Map<string, Letter> = new Map<string, Letter>([...gojuons, ...dakuons, ...handakuons, ...kogakis, ...youons]);