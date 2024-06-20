import { FactoryBase, IDetail, IDomain } from "../abs/heads";
import { IWord, Word } from "./word";

/**
 * Interface representing a tree subject.
 */
export interface ILetter extends IDomain<ILetter> {
    getWord(): IWord;
    append(next: ILetter): void;
    getNext(): ILetter | null;
    getMoraTreeNodes(): ILetterMoraTreeNode[];
}

export interface ILetterMoraTreeNode extends IDomain<ILetterMoraTreeNode> {
    getValue(): string;
    getNext(): ILetterMoraTreeNode[];
    add(v: string): void;
    isExists(v: string): boolean;
}

export class Letter implements ILetter {
    private word: IWord;
    private next: ILetter | null = null;
    private moraTreeNodes: ILetterMoraTreeNode[];
    constructor(word?: IWord, next?: ILetter, moraTreeNodes?: ILetterMoraTreeNode[]) {
        this.word = word ?? new Word("root");
        this.next = next ?? null;
        this.moraTreeNodes = moraTreeNodes ?? [];
    }

    getWord(): IWord {
        return this.word;
    }

    append(next: ILetter): void {
        if(!this.next) {
            this.next = next;
            return;
        };
        this.next.append(next);
    }

    getNext(): ILetter | null {
        return this.next;
    }

    getMoraTreeNodes(): ILetterMoraTreeNode[] {
        return this.moraTreeNodes;
    }
}

export class LetterMoraTreeNode implements ILetterMoraTreeNode {
    private value: string;
    private next: ILetterMoraTreeNode[];
    constructor(value: string, next?: ILetterMoraTreeNode[]){
        if(!value) throw new Error(`illegal argument value ${value}`);
        this.value = value;
        this.next = next ?? [];
    }

    getValue(): string {
        return this.value;
    }

    getNext(): ILetterMoraTreeNode[] {
        return this.next;
    }

    add(v: string): void {
        this.next.push(new LetterMoraTreeNode(v));
    }

    isExists(v: string): boolean {
        return this.next.filter(n => n.getValue() == v).length > 0;
    }
}

/**
 * Detail interface for generating ITree instances.
 * @template TTree - The type of the tree.
 */
export interface iLetterGenerateDetail<TTree extends ILetter> extends IDetail<TTree> {
    getWord(): IWord;
    getMoras(): string[];
}

export class LetterGenerateDetail implements iLetterGenerateDetail<ILetter> {
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

export class LetterFactory implements FactoryBase<ILetter, iLetterGenerateDetail<ILetter>> {
    build(detail: iLetterGenerateDetail<ILetter>[]): ILetter {
        if (!detail) throw new Error(``);
        let letter = new Letter();
        for (const d of detail) {
            const current = new Letter(d.getWord());
            letter.append(current);
        }
        const head = letter.getNext();
        if(!head) throw new Error(``);
        return head;
    }
}

