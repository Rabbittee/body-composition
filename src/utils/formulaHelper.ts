import { BodyInfo, Formula } from '../models';

export const formulaGuard =
  (fn: Formula): Formula =>
  (bodyInfo: BodyInfo): string => {
    try {
      return fn(bodyInfo);
    } catch (error) {
      console.error(error);

      return '-';
    }
  };
