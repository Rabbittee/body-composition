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

const schema: yup.SchemaOf<BodyInfo> = yup.object().shape({
  birth: yup.string().required(),
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
  height: yup.number().required(),
  weight: yup.number().required(),
  bodyFat: yup.number().nullable(),
  lines: yup.object().shape({
    waistLine: yup.number(),
    neckLine: yup.number(),
    hipLine: yup.number(),
  }),
  skinfolds: yup.object().shape({
    abdominal: yup.number(),
    thigh: yup.number(),
    triceps: yup.number(),
    supraspinale: yup.number(),
  }),
  activity: yup.mixed<Activity>().oneOf(Object.values(Activity)).required(),
  pregnancy: yup.mixed<Pregnancy>().oneOf(Object.values(Pregnancy)).required(),
});

export function InputForm() {
  const [localStorage, setLocalStorage] = useLocalStorage<BodyInfo>(CONFIG.storageKey);

  const userBodyInfo = {
    birth: localStorage?.birth ?? defaultBodyInfo.birth,
    gender: localStorage?.gender ?? defaultBodyInfo.gender,
    height: localStorage?.height ?? defaultBodyInfo.height,
    weight: localStorage?.weight ?? defaultBodyInfo.weight,
    activity: localStorage?.activity ?? defaultBodyInfo.activity,
    pregnancy: localStorage?.pregnancy ?? defaultBodyInfo.pregnancy,
    bodyFat: localStorage?.bodyFat,
    lines: {
      waistLine: localStorage?.lines.waistLine,
      neckLine: localStorage?.lines.neckLine,
      hipLine: localStorage?.lines.hipLine,
    },
    skinfolds: {
      abdominal: localStorage?.skinfolds.abdominal,
      thigh: localStorage?.skinfolds.thigh,
      triceps: localStorage?.skinfolds.triceps,
      supraspinale: localStorage?.skinfolds.supraspinale,
    },
  };

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
