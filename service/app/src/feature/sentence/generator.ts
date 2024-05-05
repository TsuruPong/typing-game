import { HiraganaDictionary } from "@/const/hiragana/dic/dictionary";
import { gojuons } from "@/const/hiragana/dic/gojuons";
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
    const nagyouChars = [
        gojuons.get(Hiragana.NA)?.hiragana,
        gojuons.get(Hiragana.NI)?.hiragana,
        gojuons.get(Hiragana.NU)?.hiragana,
        gojuons.get(Hiragana.NE)?.hiragana,
        gojuons.get(Hiragana.NO)?.hiragana,
    ]

    let letters: Letter[] = [];
    for (let i = 0; i < chars.length; i++) {
        let moras: string[] = [];
        
        const current = HiraganaDictionary.get(chars[i]);
        if (!current) {
            throw new Error(`chara ${chars[i]} is undefined of dictionary`)
        }

        moras = [...generateMora(current)];

        // カレントが拗音
        if (current.origin && current.kogaki) {
            let youonOrigin = generateMora(current.origin);
            let youonKogaki = generateMora(current.kogaki);
            for (const origin of youonOrigin) {
                for (const kogaki of youonKogaki) {
                    moras.push(`${origin}${kogaki}`)
                }
            }            
        }

        // カレントが「ん」かつ次の文字が「な行」以外
        if (Hiragana.N == current.hiragana) {
            if (i + 1 < chars.length) {
                const next = HiraganaDictionary.get(chars[i + 1]);
                if (!nagyouChars.includes(next?.hiragana)) {
                    moras.push(current.boin);
                }
            }
        }

        // カレントが「っ」
        if (Hiragana.XTU == current.hiragana) {
            if (i + 1 < chars.length) {
                const next = HiraganaDictionary.get(chars[i + 1]);
                if (!next?.shiins) break;
                for (const shiin of next?.shiins) {
                    moras.push(shiin);
                }
            }
        }

        const g = {hiragana: chars[i], moras: moras} as Letter;
        letters.push(g);
    }
    return letters;
}

function generateMora(current: Letter, next?: Letter) : string[] {
    let moras: string[] = [];
    const boin = current.boin;
    const shiins = current.shiins;
    if (!shiins) {
        moras.push(boin);
    } else {
        for (const shiin of shiins) {
            moras.push(`${shiin}${boin}`);
        }
    }
    return moras;
}