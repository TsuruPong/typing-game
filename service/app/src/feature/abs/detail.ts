import { IAbstractDetail } from "./heads";
import { IMora, ITree, IWord } from "./domain";

/**
 * Detail interface for generating IWord instances.
 * @template TWord - The type of the word.
 */
export interface IWordGenerateDetail<TWord extends IWord> extends IAbstractDetail<TWord> {}

/**
 * Detail interface for generating IMora instances.
 * @template TMora - The type of the mora.
 */
export interface IMoraGenerateDetail<TMora extends IMora> extends IAbstractDetail<TMora> {}

/**
 * Detail interface for generating ITree instances.
 * @template TTree - The type of the tree.
 */
export interface iTreeGenerateDetail<TTree extends ITree> extends IAbstractDetail<TTree> {}