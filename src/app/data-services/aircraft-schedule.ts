// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class ApiDataProxy {
  public readonly result: AircraftScheduleProxy[] | null;
  public static Parse(d: string): ApiDataProxy {
    return ApiDataProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ApiDataProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.result, field + ".result");
    if (d.result) {
      for (let i = 0; i < d.result.length; i++) {
        d.result[i] = AircraftScheduleProxy.Create(d.result[i], field + ".result" + "[" + i + "]");
      }
    }
    if (d.result === undefined) {
      d.result = null;
    }
    return new ApiDataProxy(d);
  }
  private constructor(d: any) {
    this.result = d.result;
  }
}

export class AircraftScheduleProxy {
  public readonly contractId: number;
  public readonly aircraftId: number;
  public readonly aircraftModel: AircraftModelProxy;
  public readonly registrationNumber: string;
  public readonly purposeOfUse: AircraftMakeOrCurrencyOrPurposeOfUseProxy;
  public readonly crewSeats: number;
  public readonly passengerSeats: number;
  public readonly hullCoverage: HullCoverageProxy;
  public readonly liabilityCoverage: LiabilityCoverageProxy;
  public readonly personalAccidentCoverage: PersonalAccidentCoverageProxy;
  public readonly eTag: string;
  public static Parse(d: string): AircraftScheduleProxy {
    return AircraftScheduleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AircraftScheduleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.contractId, false, field + ".contractId");
    checkNumber(d.aircraftId, false, field + ".aircraftId");
    d.aircraftModel = AircraftModelProxy.Create(d.aircraftModel, field + ".aircraftModel");
    checkString(d.registrationNumber, false, field + ".registrationNumber");
    d.purposeOfUse = AircraftMakeOrCurrencyOrPurposeOfUseProxy.Create(d.purposeOfUse, field + ".purposeOfUse");
    checkNumber(d.crewSeats, false, field + ".crewSeats");
    checkNumber(d.passengerSeats, false, field + ".passengerSeats");
    d.hullCoverage = HullCoverageProxy.Create(d.hullCoverage, field + ".hullCoverage");
    d.liabilityCoverage = LiabilityCoverageProxy.Create(d.liabilityCoverage, field + ".liabilityCoverage");
    d.personalAccidentCoverage = PersonalAccidentCoverageProxy.Create(d.personalAccidentCoverage, field + ".personalAccidentCoverage");
    checkString(d.eTag, false, field + ".eTag");
    return new AircraftScheduleProxy(d);
  }
  private constructor(d: any) {
    this.contractId = d.contractId;
    this.aircraftId = d.aircraftId;
    this.aircraftModel = d.aircraftModel;
    this.registrationNumber = d.registrationNumber;
    this.purposeOfUse = d.purposeOfUse;
    this.crewSeats = d.crewSeats;
    this.passengerSeats = d.passengerSeats;
    this.hullCoverage = d.hullCoverage;
    this.liabilityCoverage = d.liabilityCoverage;
    this.personalAccidentCoverage = d.personalAccidentCoverage;
    this.eTag = d.eTag;
  }
}

export class AircraftModelProxy {
  public readonly aircraftTypeCode: string;
  public readonly deductibleType: string;
  public readonly aircraftMake: AircraftMakeOrCurrencyOrPurposeOfUseProxy;
  public readonly id: number;
  public readonly name: string;
  public static Parse(d: string): AircraftModelProxy {
    return AircraftModelProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AircraftModelProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.aircraftTypeCode, false, field + ".aircraftTypeCode");
    checkString(d.deductibleType, false, field + ".deductibleType");
    d.aircraftMake = AircraftMakeOrCurrencyOrPurposeOfUseProxy.Create(d.aircraftMake, field + ".aircraftMake");
    checkNumber(d.id, false, field + ".id");
    checkString(d.name, false, field + ".name");
    return new AircraftModelProxy(d);
  }
  private constructor(d: any) {
    this.aircraftTypeCode = d.aircraftTypeCode;
    this.deductibleType = d.deductibleType;
    this.aircraftMake = d.aircraftMake;
    this.id = d.id;
    this.name = d.name;
  }
}

export class AircraftMakeOrCurrencyOrPurposeOfUseProxy {
  public readonly id: number;
  public readonly name: string;
  public static Parse(d: string): AircraftMakeOrCurrencyOrPurposeOfUseProxy {
    return AircraftMakeOrCurrencyOrPurposeOfUseProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AircraftMakeOrCurrencyOrPurposeOfUseProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.id, false, field + ".id");
    checkString(d.name, false, field + ".name");
    return new AircraftMakeOrCurrencyOrPurposeOfUseProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.name = d.name;
  }
}

export class HullCoverageProxy {
  public readonly currency: AircraftMakeOrCurrencyOrPurposeOfUseProxy;
  public readonly hullCoverageEnabled: boolean;
  public readonly hullValue: number;
  public readonly hullWarCoverageEnabled: boolean;
  public readonly tloCoverageEnabled: boolean;
  public readonly tloLimit: number;
  public readonly hullDeductibleEnabled: boolean;
  public readonly hullDeductiblePercentage: number | null;
  public readonly hullDeductibleMonetaryAmount: number | null;
  public static Parse(d: string): HullCoverageProxy {
    return HullCoverageProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): HullCoverageProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.currency = AircraftMakeOrCurrencyOrPurposeOfUseProxy.Create(d.currency, field + ".currency");
    checkBoolean(d.hullCoverageEnabled, false, field + ".hullCoverageEnabled");
    checkNumber(d.hullValue, false, field + ".hullValue");
    checkBoolean(d.hullWarCoverageEnabled, false, field + ".hullWarCoverageEnabled");
    checkBoolean(d.tloCoverageEnabled, false, field + ".tloCoverageEnabled");
    checkNumber(d.tloLimit, false, field + ".tloLimit");
    checkBoolean(d.hullDeductibleEnabled, false, field + ".hullDeductibleEnabled");
    checkNumber(d.hullDeductiblePercentage, true, field + ".hullDeductiblePercentage");
    if (d.hullDeductiblePercentage === undefined) {
      d.hullDeductiblePercentage = null;
    }
    checkNumber(d.hullDeductibleMonetaryAmount, true, field + ".hullDeductibleMonetaryAmount");
    if (d.hullDeductibleMonetaryAmount === undefined) {
      d.hullDeductibleMonetaryAmount = null;
    }
    return new HullCoverageProxy(d);
  }
  private constructor(d: any) {
    this.currency = d.currency;
    this.hullCoverageEnabled = d.hullCoverageEnabled;
    this.hullValue = d.hullValue;
    this.hullWarCoverageEnabled = d.hullWarCoverageEnabled;
    this.tloCoverageEnabled = d.tloCoverageEnabled;
    this.tloLimit = d.tloLimit;
    this.hullDeductibleEnabled = d.hullDeductibleEnabled;
    this.hullDeductiblePercentage = d.hullDeductiblePercentage;
    this.hullDeductibleMonetaryAmount = d.hullDeductibleMonetaryAmount;
  }
}

export class LiabilityCoverageProxy {
  public readonly currency: AircraftMakeOrCurrencyOrPurposeOfUseProxy;
  public readonly limitType: string;
  public readonly thirdPartyLimit: number | null;
  public readonly extendedCoverEndorsementsEnabled: boolean;
  public readonly extendedCoverEndorsementsPercentage: number | null;
  public readonly cslLimit: number | null;
  public readonly passengersLimit: number | null;
  public readonly extendedCoverEndorsementsMonetaryAmount: number | null;
  public static Parse(d: string): LiabilityCoverageProxy {
    return LiabilityCoverageProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LiabilityCoverageProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.currency = AircraftMakeOrCurrencyOrPurposeOfUseProxy.Create(d.currency, field + ".currency");
    checkString(d.limitType, false, field + ".limitType");
    checkNumber(d.thirdPartyLimit, true, field + ".thirdPartyLimit");
    if (d.thirdPartyLimit === undefined) {
      d.thirdPartyLimit = null;
    }
    checkBoolean(d.extendedCoverEndorsementsEnabled, false, field + ".extendedCoverEndorsementsEnabled");
    checkNumber(d.extendedCoverEndorsementsPercentage, true, field + ".extendedCoverEndorsementsPercentage");
    if (d.extendedCoverEndorsementsPercentage === undefined) {
      d.extendedCoverEndorsementsPercentage = null;
    }
    checkNumber(d.cslLimit, true, field + ".cslLimit");
    if (d.cslLimit === undefined) {
      d.cslLimit = null;
    }
    checkNumber(d.passengersLimit, true, field + ".passengersLimit");
    if (d.passengersLimit === undefined) {
      d.passengersLimit = null;
    }
    checkNumber(d.extendedCoverEndorsementsMonetaryAmount, true, field + ".extendedCoverEndorsementsMonetaryAmount");
    if (d.extendedCoverEndorsementsMonetaryAmount === undefined) {
      d.extendedCoverEndorsementsMonetaryAmount = null;
    }
    return new LiabilityCoverageProxy(d);
  }
  private constructor(d: any) {
    this.currency = d.currency;
    this.limitType = d.limitType;
    this.thirdPartyLimit = d.thirdPartyLimit;
    this.extendedCoverEndorsementsEnabled = d.extendedCoverEndorsementsEnabled;
    this.extendedCoverEndorsementsPercentage = d.extendedCoverEndorsementsPercentage;
    this.cslLimit = d.cslLimit;
    this.passengersLimit = d.passengersLimit;
    this.extendedCoverEndorsementsMonetaryAmount = d.extendedCoverEndorsementsMonetaryAmount;
  }
}

export class PersonalAccidentCoverageProxy {
  public readonly currency: AircraftMakeOrCurrencyOrPurposeOfUseProxy;
  public readonly limitType: string;
  public readonly crewLimit: number;
  public readonly passengersLimit: number;
  public static Parse(d: string): PersonalAccidentCoverageProxy {
    return PersonalAccidentCoverageProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PersonalAccidentCoverageProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.currency = AircraftMakeOrCurrencyOrPurposeOfUseProxy.Create(d.currency, field + ".currency");
    checkString(d.limitType, false, field + ".limitType");
    checkNumber(d.crewLimit, false, field + ".crewLimit");
    checkNumber(d.passengersLimit, false, field + ".passengersLimit");
    return new PersonalAccidentCoverageProxy(d);
  }
  private constructor(d: any) {
    this.currency = d.currency;
    this.limitType = d.limitType;
    this.crewLimit = d.crewLimit;
    this.passengersLimit = d.passengersLimit;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
