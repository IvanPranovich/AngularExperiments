declare namespace AircraftScheduleModels  {

    export interface AircraftMake {
        id: number;
        name: string;
    }

    export interface AircraftModel {
        aircraftTypeCode: string;
        deductibleType: string;
        aircraftMake: AircraftMake;
        id: number;
        name: string;
    }

    export interface PurposeOfUse {
        id: number;
        name: string;
    }

    export interface Currency {
        id: number;
        name: string;
    }

    export interface HullCoverage {
        currency: Currency;
        hullCoverageEnabled: boolean;
        hullValue: number;
        hullWarCoverageEnabled: boolean;
        tloCoverageEnabled: boolean;
        tloLimit: number;
        hullDeductibleEnabled: boolean;
        hullDeductiblePercentage: number;
        hullDeductibleMonetaryAmount?: number;
    }

    export interface LiabilityCoverage {
        currency: Currency;
        limitType: string;
        thirdPartyLimit: number;
        extendedCoverEndorsementsEnabled: boolean;
        extendedCoverEndorsementsPercentage: number;
        cslLimit?: number;
        passengersLimit?: number;
        extendedCoverEndorsementsMonetaryAmount?: number;
    }

    export interface PersonalAccidentCoverage {
        currency: Currency;
        limitType: string;
        crewLimit: number;
        passengersLimit: number;
    }

    export interface AircraftScheduleModel {
        contractId: number;
        aircraftId: number;
        aircraftModel: AircraftModel;
        registrationNumber: string;
        purposeOfUse: PurposeOfUse;
        crewSeats: number;
        passengerSeats: number;
        hullCoverage: HullCoverage;
        liabilityCoverage: LiabilityCoverage;
        personalAccidentCoverage: PersonalAccidentCoverage;
        eTag: string;
    }
}

