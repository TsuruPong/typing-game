
/**
 * Generic marker interface.
 */
export interface IMarker<TMark extends IMarker<TMark>> {}

/**
 * Factory interface.
 */
export interface IFactory<TFactory extends IFactory<TFactory>> extends IMarker<TFactory>{}

/**
 * Abstract factory interface.
 */
export interface IAbstractFactory<TDomain extends IAbstractDomain<TDomain>> extends IFactory<TDomain>{
    /**
     * Builds a new instance of TDomain.
     * @param detail
     * @returns A new instance of TDomain.
     */
    build<TDetail extends IAbstractDetail<TDomain>>(detail: TDetail): TDomain;
}

/**
 * Domain interface.
 */
export interface IDomain<TDomain extends IDomain<TDomain>> extends IMarker<TDomain> {}

/**
 * Abstract domain interface.
 */
export interface IAbstractDomain<TDomain extends IAbstractDomain<TDomain>> extends IDomain<TDomain> {}

/**
 * Detail interface.
 */
export interface IDetail<TDomain extends IDomain<TDomain>> extends IMarker<TDomain> {}

/**
 * Abstract detail interface.
 */
export interface IAbstractDetail<TDomain extends IAbstractDomain<TDomain>> extends IDetail<TDomain> {}
