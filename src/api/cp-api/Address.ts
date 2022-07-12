
/**
 *
 * @export
 * @interface Address
 */

export interface Address {

    /**
     *
     * @type {string}
     * @memberof Address
     */

    firstAddressLine: string;

    /**
     *
     * @type {string}
     * @memberof Address
    */

    city: string;

    /**
     *
     * @type {string}
     * @memberof Address
     */

    region?: string;

    /**
     *
     * @type {string}
     * @memberof Address
     */

    country: string;

    /**
     *
     * @type {string}
     * @memberof Address
     */

    postalCode?: string;

}