import { IAbstractFactory } from "./heads";
import { IMora, ITree, IWord } from "./domain";

/**
 * Factory interface for creating IWord instances.
 */
export interface IWordFactory<TWord extends IWord> extends IAbstractFactory<TWord> {}

/**
 * Factory interface for creating IMora instances.
 */
export interface IMoraFactory<TMora extends IMora> extends IAbstractFactory<TMora> {}

/**
 * Factory interface for creating ITree instances.
 */
export interface ITreeFactory<TTree extends ITree> extends IAbstractFactory<TTree> {}