import { IAbstractDomain } from "./heads";

/**
 * Interface representing a word subject.
 */
export interface IWord extends IAbstractDomain<IWord> {}

/**
 * Interface representing a mora subject.
 */
export interface IMora extends IAbstractDomain<IMora> {}

/**
 * Interface representing a tree subject.
 */
export interface ITree extends IAbstractDomain<ITree> {}