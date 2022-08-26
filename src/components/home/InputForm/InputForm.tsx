import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocalStorage } from 'react-use';
import * as yup from 'yup';
import { CONFIG } from 'config';
import { Activity, BodyInfo, Gender, Pregnancy } from 'models';
import { defaultBodyInfo, useStore } from 'store';
import { InputField, SelectField } from '..';

const decimalCheck = (value: number | undefined, step: number) => {
  const regex = new RegExp(`^\\d+(\\.\\d{1,${step}})?$`);
  return (value + '').match(regex) !== null;
};

const schema: yup.SchemaOf<BodyInfo> = yup.object().shape({
  birth: yup.string().required(),
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
  height: yup
    .number()
    .max(270)
    .min(10)
    .required()
    .test('is-decimal', 'Height must be a 1 decimal places number', (value) =>
      decimalCheck(value, 1)
    ),
  weight: yup
    .number()
    .max(640)
    .min(1)
    .required()
    .test('is-decimal', 'Weight must be a 1 decimal places number', (value) =>
      decimalCheck(value, 1)
    ),
  bodyFat: yup
    .number()
    .max(100)
    .min(0)
    .required()
    .test('is-decimal', 'BodyFat must be a 1 decimal places number', (value) =>
      decimalCheck(value, 1)
    ),
  lines: yup.object().shape({
    waistLine: yup.number().required(),
    neckLine: yup.number().required(),
    hipLine: yup.number().required(),
  }),

  activity: yup.mixed<Activity>().oneOf(Object.values(Activity)).required(),
  pregnancy: yup.mixed<Pregnancy>().oneOf(Object.values(Pregnancy)).required(),
});

export function InputForm() {
  const [localStorage, setLocalStorage] = useLocalStorage<BodyInfo>(CONFIG.storageKey);

  const userBodyInfo = { ...defaultBodyInfo, ...localStorage };

  const methods = useForm<BodyInfo>({
    defaultValues: userBodyInfo,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit, watch, setValue } = methods;

  const gender = watch('gender');

  const setBodyInfo = useStore((state) => state.setBodyInfo);

  function onSubmit(data: BodyInfo) {
    // FIXME: update defaultBodyInfo
    // setBodyInfo(data);
    setLocalStorage(data);
  }

  useEffect(() => {
    localStorage && setBodyInfo(localStorage);
  }, [localStorage, setBodyInfo]);

  useEffect(() => {
    if (gender === Gender.Male) setValue('pregnancy', Pregnancy.None);
  }, [gender, setValue]);

  return (
    <FormProvider {...methods}>
      <DevTool control={control} placement="top-left" />

      <form
        className="grid grid-cols-2 grid-rows-5 gap-2 md:grid-cols-3 md:grid-rows-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SelectField.Gender />
        <InputField.Height />
        <InputField.Birth />
        <InputField.Weight />
        <InputField.BodyFat />
        <InputField.Waist />

        <SelectField.Activity />
        <SelectField.Pregnancy disabled={gender === Gender.Male} />

        <button type="submit" className="btn col-span-2 mt-2 bg-teal md:col-span-1 md:mt-auto">
          計算
        </button>
      </form>
    </FormProvider>
  );
}
