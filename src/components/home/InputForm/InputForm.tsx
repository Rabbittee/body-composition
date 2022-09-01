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

function notNan(value: number) {
  return !isNaN(value);
}

const schema: yup.SchemaOf<BodyInfo> = yup.object().shape({
  birth: yup.string().required(),
  gender: yup.number().oneOf(Object.keys(Gender).map(Number).filter(notNan)).required(),
  height: yup.number().required(),
  weight: yup.number().required(),
  bodyFat: yup.number().required(),
  lines: yup.object().shape({
    waistLine: yup.number().required(),
    neckLine: yup.number().required(),
    hipLine: yup.number().required(),
  }),
  activity: yup.number().oneOf(Object.keys(Activity).map(Number).filter(notNan)).required(),
  pregnancy: yup.number().oneOf(Object.keys(Pregnancy).map(Number).filter(notNan)).required(),
});

export function InputForm() {
  const [localStorage, setLocalStorage] = useLocalStorage<BodyInfo>(CONFIG.storageKey);

  const userBodyInfo = { ...defaultBodyInfo, ...localStorage };

  const methods = useForm<BodyInfo>({
    defaultValues: userBodyInfo,
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = methods;

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
    if (Number(gender) === Gender.Male) setValue('pregnancy', Pregnancy.None);
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
        <SelectField.Pregnancy disabled={Number(gender) === Gender.Male} />

        <button type="submit" className="btn col-span-2 mt-2 bg-teal md:col-span-1 md:mt-auto">
          計算
        </button>
      </form>
    </FormProvider>
  );
}
