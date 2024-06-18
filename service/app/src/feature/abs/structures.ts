import { IAbstractSubject } from "./heads";

/**
 * Interface representing a word subject.
 */
export interface IWord extends IAbstractSubject<IWord> {}

/**
 * Interface representing a mora subject.
 */
export interface IMora extends IAbstractSubject<IMora> {}

/**
 * Interface representing a tree subject.
 */
export interface ITree extends IAbstractSubject<ITree> {}