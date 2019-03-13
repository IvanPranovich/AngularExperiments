import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { ApiDataProxy, AircraftScheduleProxy } from './data-services/aircraft-schedule';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const aircraftschedules = this.getData().result;
    return {aircraftschedules};
  }

  genId(airCraftSchedules: AircraftScheduleProxy[]): number {
    return airCraftSchedules.length > 0 ? Math.max(...airCraftSchedules.map(airCraftSchedule => airCraftSchedule.aircraftId)) + 1 : 201;
  }

  getData(): ApiDataProxy {
       return ApiDataProxy.Parse(
         `{
        "result": [
          {
            "contractId": 2018,
            "aircraftId": 141,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "reg44",
            "purposeOfUse": {
              "id": 14,
              "name": "Managed Fleet"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 213213,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 123213,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfzE="
          },
          {
            "contractId": 2018,
            "aircraftId": 142,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "ccc",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 123,
            "passengerSeats": 333,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": false,
              "tloLimit": 21321334,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfyw="
          },
          {
            "contractId": 2018,
            "aircraftId": 143,
            "aircraftModel": {
              "aircraftTypeCode": "123",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 3,
                "name": "Agusta Westland"
              },
              "id": 331,
              "name": "A311"
            },
            "registrationNumber": "bbb",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 232,
            "passengerSeats": 132,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": false,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 1111,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfy0="
          },
          {
            "contractId": 2018,
            "aircraftId": 146,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "dedTest123",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 13,
            "passengerSeats": 14,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": false,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 34344
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 0,
              "thirdPartyLimit": 0,
              "passengersLimit": 0,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 1111
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "None",
              "crewLimit": 0,
              "passengersLimit": 0
            },
            "eTag": "AAAAAAAAfvc="
          },
          {
            "contractId": 2018,
            "aircraftId": 323,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "TBA - 13",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 13,
            "passengerSeats": 14,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": false,
              "tloCoverageEnabled": false,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 34344
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 0,
              "thirdPartyLimit": 0,
              "passengersLimit": 0,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 1111
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "None",
              "crewLimit": 0,
              "passengersLimit": 0
            },
            "eTag": "AAAAAAAAfvw="
          },
          {
            "contractId": 2018,
            "aircraftId": 325,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 15",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 123,
            "passengerSeats": 232,
            "hullCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 1111,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfwE="
          },
          {
            "contractId": 2018,
            "aircraftId": 326,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "TBA - 16",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 13,
            "passengerSeats": 14,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 34344
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 0,
              "thirdPartyLimit": 0,
              "passengersLimit": 0,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 1111
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "None",
              "crewLimit": 0,
              "passengersLimit": 0
            },
            "eTag": "AAAAAAAAfvE="
          },
          {
            "contractId": 2018,
            "aircraftId": 333,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "F3445N",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 12,
            "passengerSeats": 244,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 12,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 343434,
              "hullDeductiblePercentage": 13
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CSL",
              "cslLimit": 12331,
              "thirdPartyLimit": 2323,
              "passengersLimit": 23223,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 232323,
              "extendedCoverEndorsementsPercentage": 12
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewOnly",
              "crewLimit": 23323,
              "passengersLimit": 23232
            },
            "eTag": "AAAAAAAAfv0="
          },
          {
            "contractId": 2018,
            "aircraftId": 334,
            "aircraftModel": {
              "aircraftTypeCode": "Test Code",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 2916,
                "name": "autotest-forNewModel: Make42795889"
              },
              "id": 1976,
              "name": "autotest-createWithCustomModel: Model545284430"
            },
            "registrationNumber": "C4773W",
            "purposeOfUse": {
              "id": 52,
              "name": "rem"
            },
            "crewSeats": 14,
            "passengerSeats": 208,
            "hullCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "hullCoverageEnabled": true,
              "hullValue": 323,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11111,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 231571895769.5,
              "hullDeductiblePercentage": 19.55337
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 851107714788.81,
              "thirdPartyLimit": 641971350734.7,
              "passengersLimit": 335213030351.08,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 687479624389.6,
              "extendedCoverEndorsementsPercentage": 33.54255
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 294893274149.58,
              "passengersLimit": 995528591374.82
            },
            "eTag": "AAAAAAAAfv8="
          },
          {
            "contractId": 2018,
            "aircraftId": 335,
            "aircraftModel": {
              "aircraftTypeCode": "Test Code",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 2916,
                "name": "autotest-forNewModel: Make42795889"
              },
              "id": 1976,
              "name": "autotest-createWithCustomModel: Model545284430"
            },
            "registrationNumber": "213213dsf",
            "purposeOfUse": {
              "id": 52,
              "name": "rem"
            },
            "crewSeats": 14,
            "passengerSeats": 208,
            "hullCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "hullCoverageEnabled": true,
              "hullValue": 23223,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 231571895769.5,
              "hullDeductiblePercentage": 19.55337
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 851107714788.81,
              "thirdPartyLimit": 641971350734.7,
              "passengersLimit": 335213030351.08,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 687479624389.6,
              "extendedCoverEndorsementsPercentage": 33.54255
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 294893274149.58,
              "passengersLimit": 995528591374.82
            },
            "eTag": "AAAAAAAAfwI="
          },
          {
            "contractId": 2018,
            "aircraftId": 336,
            "aircraftModel": {
              "aircraftTypeCode": "MT",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 14,
                "name": "Bombardier"
              },
              "id": 106,
              "name": "415"
            },
            "registrationNumber": "Y1880W",
            "purposeOfUse": {
              "id": 2477,
              "name": "autotest-edit: purposeOfUse782526046(updated)"
            },
            "crewSeats": 10,
            "passengerSeats": 246,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123213,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 453142483598.88,
              "hullDeductiblePercentage": 75.51505
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 687487034923.25,
              "passengersLimit": 611191229591.28,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 972305356568.03,
              "extendedCoverEndorsementsPercentage": 87.74886
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "CrewOnly",
              "crewLimit": 435451287600.52,
              "passengersLimit": 720079185911.32
            },
            "eTag": "AAAAAAAAfyU="
          },
          {
            "contractId": 2018,
            "aircraftId": 337,
            "aircraftModel": {
              "aircraftTypeCode": "HT",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 42,
                "name": "Eurocopter"
              },
              "id": 167,
              "name": "EC175"
            },
            "registrationNumber": "G9999A",
            "purposeOfUse": {
              "id": 10,
              "name": "Police"
            },
            "crewSeats": 8,
            "passengerSeats": 185,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 2323,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 776001624906.75,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 971139858065.96,
              "hullDeductiblePercentage": 91.54524
            },
            "liabilityCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "PassengersOnly",
              "cslLimit": 685016856418.34,
              "thirdPartyLimit": 423316959237.34,
              "passengersLimit": 750419542127.33,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 37604198636.12,
              "extendedCoverEndorsementsPercentage": 79.98405
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "PassengersOnly",
              "crewLimit": 680177442434.56,
              "passengersLimit": 162330723595.09
            },
            "eTag": "AAAAAAAAfto="
          },
          {
            "contractId": 2018,
            "aircraftId": 357,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 39",
            "purposeOfUse": {
              "id": 408,
              "name": "Aidavs"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfvg="
          },
          {
            "contractId": 2018,
            "aircraftId": 358,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 40",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfvU="
          },
          {
            "contractId": 2018,
            "aircraftId": 359,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 41",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfvo="
          },
          {
            "contractId": 2018,
            "aircraftId": 360,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 42",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfvk="
          },
          {
            "contractId": 2018,
            "aircraftId": 363,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 43",
            "purposeOfUse": {
              "id": 408,
              "name": "Aidavs"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfws="
          },
          {
            "contractId": 2018,
            "aircraftId": 364,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 44",
            "purposeOfUse": {
              "id": 14,
              "name": "Managed Fleet"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 1,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfww="
          },
          {
            "contractId": 2018,
            "aircraftId": 365,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 45",
            "purposeOfUse": {
              "id": 14,
              "name": "Managed Fleet"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 1,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfw0="
          },
          {
            "contractId": 2018,
            "aircraftId": 366,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 46",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfw4="
          },
          {
            "contractId": 2018,
            "aircraftId": 367,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 47",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfw8="
          },
          {
            "contractId": 2018,
            "aircraftId": 368,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 48",
            "purposeOfUse": {
              "id": 408,
              "name": "Aidavs"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfxA="
          },
          {
            "contractId": 2018,
            "aircraftId": 369,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 49",
            "purposeOfUse": {
              "id": 408,
              "name": "Aidavs"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfxE="
          },
          {
            "contractId": 2018,
            "aircraftId": 370,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "TBA - 50",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 13,
            "passengerSeats": 14,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": false,
              "tloCoverageEnabled": false,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 34344
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 0,
              "thirdPartyLimit": 0,
              "passengersLimit": 0,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 1111
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "None",
              "crewLimit": 0,
              "passengersLimit": 0
            },
            "eTag": "AAAAAAAAfxI="
          },
          {
            "contractId": 2018,
            "aircraftId": 371,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "TBA - 51",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 13,
            "passengerSeats": 14,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 11,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 34344
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 0,
              "thirdPartyLimit": 0,
              "passengersLimit": 0,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 1111
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "limitType": "None",
              "crewLimit": 0,
              "passengersLimit": 0
            },
            "eTag": "AAAAAAAAfxM="
          },
          {
            "contractId": 2018,
            "aircraftId": 372,
            "aircraftModel": {
              "aircraftTypeCode": "ST",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 7,
              "name": "AT-302"
            },
            "registrationNumber": "TBA - 52",
            "purposeOfUse": {
              "id": 16,
              "name": "Whether 'tis nobler in the mind to suffer"
            },
            "crewSeats": 12,
            "passengerSeats": 244,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 123,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 12,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 343434,
              "hullDeductiblePercentage": 13
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CSL",
              "cslLimit": 12331,
              "thirdPartyLimit": 2323,
              "passengersLimit": 23223,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 232323,
              "extendedCoverEndorsementsPercentage": 12
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewOnly",
              "crewLimit": 23323,
              "passengersLimit": 23232
            },
            "eTag": "AAAAAAAAfxQ="
          },
          {
            "contractId": 2018,
            "aircraftId": 373,
            "aircraftModel": {
              "aircraftTypeCode": "Test Code",
              "deductibleType": "MonetaryAmount",
              "aircraftMake": {
                "id": 2916,
                "name": "autotest-forNewModel: Make42795889"
              },
              "id": 1976,
              "name": "autotest-createWithCustomModel: Model545284430"
            },
            "registrationNumber": "TBA - 53",
            "purposeOfUse": {
              "id": 52,
              "name": "rem"
            },
            "crewSeats": 14,
            "passengerSeats": 208,
            "hullCoverage": {
              "currency": {
                "id": 1,
                "name": "EUR"
              },
              "hullCoverageEnabled": true,
              "hullValue": 23223,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductibleMonetaryAmount": 231571895769.5,
              "hullDeductiblePercentage": 19.55337
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "None",
              "cslLimit": 851107714788.81,
              "thirdPartyLimit": 641971350734.7,
              "passengersLimit": 335213030351.08,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsMonetaryAmount": 687479624389.6,
              "extendedCoverEndorsementsPercentage": 33.54255
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 294893274149.58,
              "passengersLimit": 995528591374.82
            },
            "eTag": "AAAAAAAAfxU="
          },
          {
            "contractId": 2018,
            "aircraftId": 374,
            "aircraftModel": {
              "aircraftTypeCode": "SP",
              "deductibleType": "Percentage",
              "aircraftMake": {
                "id": 4,
                "name": "Air Tractor"
              },
              "id": 8,
              "name": "AT-400"
            },
            "registrationNumber": "TBA - 54",
            "purposeOfUse": {
              "id": 17,
              "name": "Games Work"
            },
            "crewSeats": 133,
            "passengerSeats": 33,
            "hullCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "hullCoverageEnabled": true,
              "hullValue": 234234234,
              "hullWarCoverageEnabled": true,
              "tloCoverageEnabled": true,
              "tloLimit": 111,
              "hullDeductibleEnabled": true,
              "hullDeductiblePercentage": 12
            },
            "liabilityCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "ThirdPartyOnly",
              "thirdPartyLimit": 11,
              "extendedCoverEndorsementsEnabled": true,
              "extendedCoverEndorsementsPercentage": 99
            },
            "personalAccidentCoverage": {
              "currency": {
                "id": 2,
                "name": "USD"
              },
              "limitType": "CrewAndPassengers",
              "crewLimit": 10,
              "passengersLimit": 100
            },
            "eTag": "AAAAAAAAfxY="
          }
        ]
      }`);
  }
}