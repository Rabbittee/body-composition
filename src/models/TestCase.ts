interface BodyFat {
  skinfolds: string;
  lines: string;
}

interface BMR {
  robertsonAndReidLow: string;
  robertsonAndReidMean: string;
  robertsonAndReidHigh: string;
  revisedHarrisBenedict: string;
  mifflinStJeor: string;
  katchMcArdle: string;
  oxfordEquation: string;
}

interface TDEE {
  FAO: string;
  redman: string;
}

interface BSA {
  doubois: string;
  duboisCorrected: string;
  yu: string;
  haycock: string;
  mosteller: string;
}

export interface Expected {
  dailyCalories: string;
  BMI: string;
  WHtR: string;
  bodyFat: BodyFat;
  BMR: BMR;
  TDEE: TDEE;
  BSA: BSA;
}
