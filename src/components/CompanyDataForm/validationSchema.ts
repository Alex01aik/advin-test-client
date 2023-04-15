import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  file: yup
    .mixed()
    .required()
    .test('fileRequired', 'File is required', (value: any) => {
      return value && value.length > 0;
    }),
});
