import { HiraganaDictionary } from "@/const/hiragana/dic/dictionary";
import { kogakis } from "@/const/hiragana/dic/kogakis";
import { Hiragana } from "@/const/hiragana/hiragana";
import { Letter } from "@/types/hiragana/letter";

export function generatePredictionTextFromSentence(sentence: string) : Letter[] {
    const chars = [...sentence];
    return generate(chars);
}

export function generateYouonSupportPredictionTextFromSentence(sentence: string) : Letter[] {
    const youonChars = [
        kogakis.get(Hiragana.XA)?.hiragana,
        kogakis.get(Hiragana.XI)?.hiragana,
        kogakis.get(Hiragana.XU)?.hiragana,
        kogakis.get(Hiragana.XE)?.hiragana,
        kogakis.get(Hiragana.XO)?.hiragana,
        kogakis.get(Hiragana.XYA)?.hiragana,
        kogakis.get(Hiragana.XYU)?.hiragana,
        kogakis.get(Hiragana.XYO)?.hiragana
    ];
    const chars = []
    const splited = [...sentence];
    for (let i = 0; i < splited.length; i++) {
        const current = splited[i];
        if (youonChars.includes(current)) continue;
        if (i + 1 < splited.length) {
            const next = splited[i + 1];
            if (youonChars.includes(next)) {
                chars.push(`${current}${next}`);
                continue;    
            }
        }
        chars.push(current);
    }

    return generate(chars);
}

function generate(chars: string[]) : Letter[] {
    let letters: Letter[] = [];
    for (const char of chars) {
        let moras: string[] = [];
        const letter = HiraganaDictionary.get(char);
        if (!letter) {
            throw new Error(`chara ${char} is undefined of dictionary`)
        }
        moras = [...generateMora(letter)];
        if (letter.origin && letter.kogaki) {
            let youonOrigin = generateMora(letter.origin);
            let youonKogaki = generateMora(letter.kogaki);
            for (const origin of youonOrigin) {
                for (const kogaki of youonKogaki) {
                    moras.push(`${origin}${kogaki}`)
                }
            }            
        }
        const g = {hiragana: char, moras: moras} as Letter;
        letters.push(g);
    }
    return letters;
}

function generateMora(letter: Letter) : string[] {
    let mora: string[] = [];
    const boin = letter.boin;
    const shiins = letter.shiins;
    if (!shiins) {
        mora.push(boin);
    } else {
        for (const shiin of shiins) {
            mora.push(`${shiin}${boin}`);
        }
    }
    return mora;
}