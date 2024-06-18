
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
export interface IAbstractFactory<TSubject extends IAbstractSubject<TSubject>> extends IFactory<TSubject>{
    /**
     * Builds a new instance of TSubject.
     * @param detail
     * @returns A new instance of TSubject.
     */
    build<TDetail extends IAbstractDetail<TSubject>>(detail: TDetail): TSubject;
}

/**
 * Subject interface.
 */
export interface ISubject<TSubject extends ISubject<TSubject>> extends IMarker<TSubject> {}

/**
 * Abstract subject interface.
 */
export interface IAbstractSubject<TSubject extends IAbstractSubject<TSubject>> extends ISubject<TSubject> {}

/**
 * Detail interface.
 */
export interface IDetail<TSubject extends ISubject<TSubject>> extends IMarker<TSubject> {}

/**
 * Abstract detail interface.
 */
export interface IAbstractDetail<TSubject extends IAbstractSubject<TSubject>> extends IDetail<TSubject> {}
