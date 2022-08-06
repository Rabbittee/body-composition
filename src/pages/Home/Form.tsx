import { useForm } from 'react-hook-form';
import { InputField } from '../../components';
import { FormInputs } from '../../models';

function Form() {
  const { handleSubmit } = useForm<FormInputs>();

  function onSubmit(data: FormInputs) {
    return console.log(data);
  }

  return (
    <form className="grid grid-cols-3 grid-rows-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <InputField.Birth />
      <InputField.Gender />
      <InputField.Height />
      <InputField.Weight />
      <InputField.BodyFat />

      <button type="submit" className="btn mt-auto bg-teal">
        計算
      </button>
    </form>
  );
}

export default Form;
