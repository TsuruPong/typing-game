
/**
 * Generic marker interface.
 */
export interface IMarker<TMark extends IMarker<TMark>> {}

/**
 * Factory interface.
 */
export interface IFactory<TFactory extends IFactory<TFactory, TDomain, TDetail>, TDomain extends IDomain<TDomain>, TDetail extends IDetail<TDetail>> extends IMarker<TFactory>{}

/**
 * Abstract factory class.
 */
export abstract class FactoryBase<TDomain extends IDomain<TDomain>, TDetail extends IDetail<TDetail>> implements IFactory<FactoryBase<TDomain, TDetail>, TDomain, TDetail> {
    /**
     * Builds a new instance of TDomain.
     * @param detail
     * @returns A new instance of TDomain.
     */
    abstract build(detail: TDetail | TDetail[]): TDomain | TDomain[];
}

/**
 * Domain interface.
 */
export interface IDomain<TDomain extends IDomain<TDomain>> extends IMarker<TDomain> {}

/**
 * Detail interface.
 */
export interface IDetail<TDomain extends IDomain<TDomain>> extends IMarker<TDomain> {}
