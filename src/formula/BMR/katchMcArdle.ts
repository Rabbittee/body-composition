import { Person } from "../models";

export const katchMcArdle = ({ weight, bodyFat, height, gender }: Person) => {
  // BMR = 370 + (21.6 * Lean Body Mass[kg])
  // LBM = (Weight[kg] * (100 - Body Fat[%])/100
  // # LBM (men) = 0.407 * weight[kg] + 0.267 * height[cm] - 19.2
  // # LBM (women) = 0.252 * weight[kg] + 0.473 * height[cm] - 48.3

  let LBM = (weight * (100 - bodyFat)) / 100;
  if (height !== undefined) {
    if (gender === "men") {
      LBM = 0.407 * weight + 0.267 * height - 19.2;
    } else if (gender === "women") {
      LBM = 0.252 * weight + 0.473 * height - 48.3;
    }
  }

  const BMR = 370 + 21.6 * LBM;
  return Math.round(BMR);
};
