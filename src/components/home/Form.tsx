import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField } from '..';
import { BodyInfo } from '../../models';
import { defaultBodyInfo, useStore } from '../../store';

const schema: yup.SchemaOf<BodyInfo> = yup.object().shape({
  birth: yup.string().required(),
  gender: yup.number().required(),
  height: yup.number().required(),
  weight: yup.number().required(),
  bodyFat: yup.number().required(),
});

function Form() {
  const methods = useForm<BodyInfo>({
    defaultValues: defaultBodyInfo,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const setBodyInfo = useStore((state) => state.setBodyInfo);

  function onSubmit(data: BodyInfo) {
    setBodyInfo(data);
  }

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-3 grid-rows-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField.Gender />
        <InputField.Height />
        <InputField.Birth />
        <InputField.Weight />
        <InputField.BodyFat />

        <button type="submit" className="btn mt-auto bg-teal">
          計算
        </button>
      </form>
    </FormProvider>
  );
}

export default Form;
