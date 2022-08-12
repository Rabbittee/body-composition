import BirthField from './Input/BirthField';
import BodyFatField from './Input/BodyFatField';
import HeightField from './Input/HeightField';
import WaistField from './Input/Waist';
import WeightField from './Input/WeightField';

import ActivityField from './Select/ActivityField';
import GenderField from './Select/GenderField';
import PregnancyField from './Select/PregnancyField';

export const InputField = {
  Birth: BirthField,
  BodyFat: BodyFatField,
  Height: HeightField,
  Weight: WeightField,
  Waist: WaistField,
};

export const SelectField = {
  Gender: GenderField,
  Activity: ActivityField,
  Pregnancy: PregnancyField,
};
