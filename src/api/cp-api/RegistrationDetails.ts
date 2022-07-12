/**
 *
 * @export
 * @interface RegistrationDetails
 */

 export interface RegistrationDetails {

    /**
     *
     * @type {string}
     * @memberof RegistrationDetails
     */

    registrationStatus: string;

    /**
     *
     * @type {string}
     * @memberof RegistrationDetails
     */

    managingLou: string;

    /**
     *
     * @type {string}
     * @memberof RegistrationDetails
     */

    validationSources: string;

    /**
     *
     * @type {Date}
     * @memberof RegistrationDetails
     */

    initialRegistrationDate?: Date;

    /**
     *
     * @type {Date}
     * @memberof RegistrationDetails
     */

    lastUpdateDate?: Date;

    /**
     *
     * @type {Date}
     * @memberof RegistrationDetails
     */

    nextRenewalDate: Date;

}