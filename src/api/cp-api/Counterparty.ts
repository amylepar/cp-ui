/**
 *
 * @export
 * @interface CounterParty
 */

import { Address } from "./Address";
import { RegistrationDetails } from "./RegistrationDetails";

 export interface CounterParty {

    /**
     *
     * @type {string}
     * @memberof CounterParty
     */

    lei: string;

    /**
     *
     * @type {number}
     * @memberof CounterParty
     */

    version?: number;

    /**
     *
     * @type {string}
     * @memberof CounterParty
     */

    legalName: string;

    /**
     *
     * @type {string}
     * @memberof CounterParty
     */

    legalJurisdiction: string;

    /**
     *
     * @type {string}
     * @memberof CounterParty
     */

    entityCategory: string;

    /**
     *
     * @type {string}
     * @memberof CounterParty
     */

    entityStatus: string;

    /**
     *
     * @type {Date}
     * @memberof CounterParty
     */

    loadTime?: Date;

    /**
     *
     * @type {Address}
     * @memberof CounterParty
     */

    legalAddress: Address;

    /**
     *
     * @type {Address}
     * @memberof CounterParty
     */

    headquartersAddress: Address;

    /**
     *
     * @type {RegistrationDetails}
     * @memberof CounterParty
     */

    registrationDetails: RegistrationDetails;

}