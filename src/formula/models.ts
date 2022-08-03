export enum Gender {
  men = "men",
  women = "women",
}

export interface Person {
  height?: number;
  weight: number;
  bodyFat: number;
  birthday: string;
  gender?: Gender;
}
