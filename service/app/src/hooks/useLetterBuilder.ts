"use client"

import { WordFactory, WordGenerateDetail } from "@/feature/sentence/word";
import { MoraFactory, MoraGenerateDetail } from "@/feature/sentence/mora";
import { LetterFactory, LetterGenerateDetail } from "@/feature/sentence/letter";

const useLetterBuilder = (sentence: string) => {
    const wordDetail = new WordGenerateDetail(sentence);
    const words = new WordFactory().build(wordDetail);
    const MoraDetail = new MoraGenerateDetail(words);
    const moras = new MoraFactory().build(MoraDetail);
    const letterDetail: LetterGenerateDetail[] = [];
    for (const mora of moras) {
      letterDetail.push(
        new LetterGenerateDetail(mora.getWord(), mora.getMoras())
      );
    }
    const letter = new LetterFactory().build(letterDetail);
    return letter;
}

export default useLetterBuilder;