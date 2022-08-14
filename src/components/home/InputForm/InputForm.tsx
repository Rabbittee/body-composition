import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Activity, BodyInfo, Gender, Pregnancy } from 'models';
import { defaultBodyInfo, useStore } from 'store';
import { InputField, SelectField } from '..';

//: yup.SchemaOf<BodyInfo>
const schema = yup.object().shape({
  birth: yup.string().required(),
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
  height: yup.number().required(),
  weight: yup.number().required(),
  bodyFat: yup.number().required(),
  waist: yup.number().required(),
  activity: yup.mixed<Activity>().oneOf(Object.values(Activity)).required(),
  pregnancy: yup.mixed<Pregnancy>().oneOf(Object.values(Pregnancy)).required(),
});

export function InputForm() {
  const methods = useForm<BodyInfo>({
    defaultValues: defaultBodyInfo,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, watch, setValue } = methods;

  const gender = watch('gender');

  const setBodyInfo = useStore((state) => state.setBodyInfo);

  function onSubmit(data: BodyInfo) {
    setBodyInfo(data);
  }

  useEffect(() => {
    if (gender === Gender.Male) setValue('pregnancy', Pregnancy.None);
  }, [gender, setValue]);

  return (
    <FormProvider {...methods}>
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
