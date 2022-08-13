import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField, SelectField } from '..';
import { Activity, BodyInfo, Gender, Pregnancy } from '../../models';
import { defaultBodyInfo, useStore } from '../../store';
import { useEffect } from 'react';

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

export function Form() {
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
      <form className="grid grid-cols-3 grid-rows-3 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <SelectField.Gender />
        <InputField.Height />
        <InputField.Birth />
        <InputField.Weight />
        <InputField.BodyFat />
        <InputField.Waist />

        <SelectField.Activity />
        <SelectField.Pregnancy disabled={gender === Gender.Male} />

        <button type="submit" className="btn mt-auto bg-teal">
          計算
        </button>
      </form>
    </FormProvider>
  );
}
