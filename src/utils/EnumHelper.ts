// type TypeOfItem<T> = T extends (infer U)[] ? U : never;

type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

export function genList<E extends Enum<E>>(enumType: E): { key: keyof E; value: string }[] {
  const types = Object.entries(enumType) as Array<[keyof typeof enumType, string]>;
  const list = types.filter(([key]) => isNaN(Number(key))).map(([key, value]) => ({ key, value }));
  return list;
}
