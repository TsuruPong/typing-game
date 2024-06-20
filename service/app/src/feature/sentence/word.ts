import { Hiragana } from "@/const/hiragana/hiragana";
import { FactoryBase, IDetail, IDomain } from "@/feature/abs/heads";

/**
 * Interface representing a word subject.
 */
export interface IWord extends IDomain<IWord> {
    getWord(): string;
}

export class Word implements IWord {
    private word: string;
    constructor(word: string) {
        if(!word) throw new Error(`illegal argument word : ${word}`);
        this.word = word;
    }
    
    getWord(): string {
        return this.word;
    }
}

/**
 * Detail interface for generating IWord instances.
 * @template TWord - The type of the word.
 */
export interface IWordGenerateDetail<TWord extends IWord> extends IDetail<TWord> {
    getSentence(): string;
}

export class WordGenerateDetail implements IWordGenerateDetail<IWord> {
    private sentence: string;
    constructor(sentence: string) {
        if(!sentence) throw new Error(`illegal argument sentence : ${sentence}`);
        this.sentence = sentence;
    }

    getSentence(): string {
        return this.sentence;
    }
}

export class WordFactory implements FactoryBase<IWord, IWordGenerateDetail<IWord>> {
    private youonChars: string[] = [
        Hiragana.XA,
        Hiragana.XI,
        Hiragana.XU,
        Hiragana.XE,
        Hiragana.XO,
        Hiragana.XYA,
        Hiragana.XYU,
        Hiragana.XYO,
    ];

    build(detail: IWordGenerateDetail<IWord>): IWord[] {
        if (!detail) throw new Error(``);
        const words: Word[] = [];
        const splited = [...detail.getSentence()];
        for (let i = 0; i < splited.length; i++) {
            const current = splited[i];
            
            if (this.youonChars.includes(current)) continue;

            if (i + 1 < splited.length) {
                const next = splited[i + 1];
                if (this.youonChars.includes(next)) {
                    words.push(new Word(`${current}${next}`));
                    continue;
                }
            }
            words.push(new Word(current));
        }
        return words;
    }
}