import { Hiragana } from "@/const/hiragana/hiragana";
import { FactoryBase, IDetail, IDomain } from "../abs/heads";
import { IWord, Word } from "./word";
import { HiraganaDictionary } from "@/const/hiragana/dictionary";
import { Letter } from "@/types/hiragana/letter";

/**
 * Interface representing a mora subject.
 */
export interface IMora extends IDomain<IMora> {
    getWord(): IWord;
    getMoras(): string[];
}

export class Mora implements IMora {
    private word: IWord;
    private moras: string[];
    constructor(word: IWord, moras: string[]) {
        if (!word) throw new Error(`illegal argument word : ${word}`);
        if (!moras) throw new Error(`illegal argument moras : ${moras}`);
        this.word = word;
        this.moras = moras;
    }

    getWord(): IWord {
        return this.word;
    }

    getMoras(): string[] {
        return this.moras;
    }
}

/**
 * Detail interface for generating IMora instances.
 * @template TMora - The type of the mora.
 */
export interface IMoraGenerateDetail<TMora extends IMora> extends IDetail<TMora> {
    getWords(): IWord[];
}

export class MoraGenerateDetail implements IMoraGenerateDetail<IMora> {
    private words: IWord[];
    constructor(words: IWord[]) {
        if (!words) throw new Error(`illegal argument words : ${words}`);
        this.words = words;
    }

    getWords(): IWord[] {
        return this.words;
    }
}

export class MoraFactory implements FactoryBase<IMora, IMoraGenerateDetail<IMora>> {
    private nagyouChars: string[] = [
        Hiragana.NA,
        Hiragana.NI,
        Hiragana.NU,
        Hiragana.NE,
        Hiragana.NO,
    ];
    
    build(detail: IMoraGenerateDetail<IMora>): IMora[] {
        if (!detail) throw new Error(``);
        const mora: Mora[] = [];
        for(let i = 0; i < detail.getWords().length; i++) {
            const currentWord = detail.getWords()[i].getWord();
            const current = HiraganaDictionary.get(currentWord);
            if (!current) throw new Error(`${currentWord} is undefined of dictionary`);
            
            let moras: string[] = this.generateMora(current);

            // カレントが拗音
            if (current.origin && current.kogaki) {
                let youonOrigin = this.generateMora(current.origin);
                let youonKogaki = this.generateMora(current.kogaki);
                for (const origin of youonOrigin) {
                    for (const kogaki of youonKogaki) {
                        moras.push(`${origin}${kogaki}`);
                    }
                }
            }
  
            // カレントが「ん」かつ次の文字が「な行」以外
            if (Hiragana.N == currentWord) {
                if (detail.getWords().length < i + 1 ) break;
                const nextWord = detail.getWords()[i + 1].getWord();
                if (this.nagyouChars.includes(nextWord)) break;
                moras.push(current.boin);
            }
        
            // カレントが「っ」
            if (Hiragana.XTU == currentWord) {
                if (detail.getWords().length < i + 1 ) break;
                const next = HiraganaDictionary.get(detail.getWords()[i + 1].getWord());
                if (!next) break;
                const nextShiins = next.origin ? next.origin.shiins?.map(v => v.slice(0, 1)) : next.shiins;
                moras = [...moras, ...nextShiins];
            }

            mora.push(new Mora(detail.getWords()[i], moras));
        }

        return mora;
    }

    private generateMora(current: Letter): string[] {
        if (current.shiins.length == 0)  return [current.boin];
        return current.shiins.map(shiin => `${shiin}${current.boin}`);
    }
}